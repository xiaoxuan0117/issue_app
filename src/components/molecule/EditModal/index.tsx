import React from "react";
import Button from "../../atom/Button";
import Input from "../../atom/Input";
import RadioButton from "../../atom/RadioButton";
import MarkdownEditor from "../../atom/MarkdownEditor";
import closeButton from "../../../assets/closeButton.svg";

import "./style.scss";
import { setTaskSearchKeyword, taskSearch } from "../../../reducer/taskList";
import { setAddBody } from "../../../reducer/addTask";

type EditModalProps = {
  prevTitle: string;
};

export default function EditModal(props: EditModalProps): JSX.Element {
  const dammyData_three = ["ToDo", "In Progress", "Done"];
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="title-section">
          <div className="label">Title</div>
          <div className="input-section">
            <Input input={props.prevTitle} changeEvent={setTaskSearchKeyword} />
          </div>
        </div>
        <div className="label-select">
          <RadioButton type="labels" options={dammyData_three}></RadioButton>
        </div>
        <div className="markdown-section">
          <MarkdownEditor changeEvent={setAddBody} />
        </div>
        <div className="footer">
          <Button clickEvent={taskSearch} class="primary">
            <div>Cancel</div>
          </Button>
          <Button clickEvent={taskSearch} class="primary">
            <div>Update</div>
          </Button>
        </div>
        <div className="close-button">
          <Button clickEvent={taskSearch} class="close">
            <img src={closeButton} alt="closeButton" />
          </Button>
        </div>
      </div>
    </div>
  );
}
