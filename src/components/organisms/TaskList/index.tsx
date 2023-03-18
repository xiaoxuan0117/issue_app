import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { TaskListProps } from "../../../type";
import Loading from "../../atom/Loading";
import Task from "../../molecule/Task";

import "./style.scss";

export default function TaskList(props: TaskListProps): JSX.Element {
  const { taskList, isLoading, errMsg } = props;
  return (
    <div className="taskList-wrapper">
      <div
        className={`taskList ${classNames(
          taskList.length !== 0 && "has-data"
        )}`}
      >
        {typeof taskList !== "string" &&
          taskList.map((task, index) => (
            <Task key={`task-${index}`} {...task}></Task>
          ))}
      </div>
      {isLoading === true && <Loading />}
      {errMsg && (
        <div className="err">
          {errMsg}
          <Link to="/login">redirect to login page and try again{" :))"}</Link>
        </div>
      )}
    </div>
  );
}
