var express = require("express");
var axios = require("axios");
var router = express.Router();

/* POST token */
router.get("/login/oauth/access_token", async function (req, res, next) {
  console.log("here");
  const { code } = req.query;
  console.log("body", req.query);
  try {
    const result = await axios({
      url: "https://github.com/login/oauth/access_token",
      method: "post",
      headers: {
        Accept: "application/json",
      },
      params: {
        client_id: "7a2d102304bf70a39a54",
        client_secret: "1e62e4e8d11bb34b58f36a79ef9659dd9d18c240",
        code: code,
      },
    });
    const { access_token } = result.data;
    res.cookie("access_token", access_token);
    res.redirect("/");
  } catch (err) {
    console.log("err", err);
  }
});

/* GET issue */
router.get("/issue", async function (req, res, next) {
  console.log("req.cookies.access_token", req.cookies.access_token);
  try {
    const result = await axios({
      url: "https://api.github.com/issues",
      method: "get",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${req.cookies.access_token}`,
      },
    });
    res.send(result.data);
  } catch (err) {
    console.log("err");
    res.send(err);
  }
});
module.exports = router;