import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import AssignmentIcon from "@material-ui/icons/Assignment";
import amber from "@material-ui/core/colors/amber";
import React from "react";
import { Card, Form } from "react-bootstrap";

export const TodoItem = ({
  id,
  task,
  student,
  isCompleted,
  handleDelete,
  handleChecked,
  handleUpdateTask,
}) => {
  return (
    <Card bg="dark" text="white" style={{ width: "18rem" }} className="mb-2">
      <Card.Header>
        <span style={{ paddingRight: 150 }}>
          <AssignmentIcon style={{ fontSize: 30, color: amber[900] }} />
        </span>
        <a href="#">
          <BorderColorIcon
            style={{ fontSize: 30, color: amber[900] }}
            onClick={() => handleUpdateTask({ id, task, student, isCompleted })}
          />
        </a>
        <a href="#" style={{ paddingLeft: 6 }}>
          <DeleteForeverIcon
            style={{ fontSize: 30, color: amber[900] }}
            onClick={() => handleDelete(id)}
          />
        </a>
        <Form.Check
          style={{ fontSize: 15, color:amber[900]  }}
          label="Mark as done"
          aria-label="option 1"
          defaultChecked={isCompleted}
          onChange={({ target }) => handleChecked(target.checked, id)}
        />
      </Card.Header>
      <Card.Body>
        <Card.Title>{task}</Card.Title>
        <Card.Text>{student}</Card.Text>
      </Card.Body>
    </Card>
  );
};
