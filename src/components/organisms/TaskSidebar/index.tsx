import React from "react";
import { Assignee } from "../../../type";
import { useAppDispatch } from "../../../store";
import { UpdateDetailState, toggleDetail } from "../../../reducer/taskDetail";

import LinkElement from "../../atom/LinkElement";
import Label from "../../atom/Label";
import Toggle from "../../atom/Toggle";
import Button from "../../atom/Button";
import Avatar from "../../atom/Avatar";
import closeButton from "../../../assets/closeButton.svg";

import "./style.scss";

type TaskSidebarProps = {
  isOpen: boolean;
  labels: string[];
  milestone: string;
  milestone_url: string;
  assignees: Assignee[];
  taskInfo: { repoOwner: string; repoName: string; number: number };
};

export default function TaskSidebar(props: TaskSidebarProps): JSX.Element {
  const { isOpen, labels, milestone, assignees, milestone_url, taskInfo } =
    props;

  const dispatch = useAppDispatch();

  return (
    <div className="taskDetail-wrapper">
      <div className="taskDetail">
        <div className="section status">
          <div className="title">Open/Closed</div>
          <Toggle
            isOpen={isOpen}
            onClick={() => {
              dispatch(UpdateDetailState(taskInfo));
            }}
          />
        </div>
        <div className="section labels">
          <div className="title">Labels</div>
          <div className="list">
            {labels.length
              ? labels.map((label, index) => (
                  <Label key={`lable=${index}`}>{label}</Label>
                ))
              : "no labels"}
          </div>
        </div>
        <div className="section milestone">
          <div className="title">Milestone</div>
          {milestone ? (
            <LinkElement
              isRouter={false}
              class="task"
              href={milestone_url || "#"}
            >
              <div className="milestone">{milestone}</div>
            </LinkElement>
          ) : (
            <div className="empty">no milestone</div>
          )}
        </div>
        <div className="section assignees">
          <div className="title">Assignees</div>
          <div className="list">
            {assignees.length
              ? assignees.map((assignee) => (
                  <div key={assignee.id} className="avatar-wrapper">
                    <Avatar
                      image={assignee.avatar_url}
                      class="member"
                      href={assignee.html_url}
                    />
                  </div>
                ))
              : "no assignees"}
          </div>
        </div>
      </div>
      <div className="close-button">
        <Button
          class="img-button"
          onClick={() => {
            dispatch(toggleDetail());
          }}
        >
          <img src={closeButton} alt="closeButton" />
        </Button>
      </div>
    </div>
  );
}
