import { useState } from "react";
import { CreateTodo } from "./components/createTodo/CreateTodo";
import { TodoContainer } from "./components/todoContainer/TodoContainer";
import AssignmentIcon from "@material-ui/icons/Assignment";
import amber from "@material-ui/core/colors/amber";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const [newTask, setNewTask] = useState(null);
  const [resetForm, setResetForm] = useState(false);
  const [taskForUpdate, setTaskForUpdate] = useState({});
  const [updateTask, setUpdateTask] = useState(null);
  const [isEditOrAdd, setIsEditOrAdd] = useState("Create a New Task");
  const onSubmit = (data) => {
    if (isEditOrAdd == "Create a New Task") {
      setNewTask(data);
    } else {
      setUpdateTask(data);
    }
  };

  return (
    <div className="App">
      <div className="icon-nav">
        <Container>
          <Row>
            <Col>
              <AssignmentIcon style={{ fontSize: 100, color: amber[900] }} />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <div className="App-header">
          <CreateTodo
            onSubmit={onSubmit}
            resetForm={resetForm}
            setResetForm={setResetForm}
            taskForUpdate={taskForUpdate}
            addOrUpdate={isEditOrAdd}
          />
          <TodoContainer
            newTask={newTask}
            setResetForm={setResetForm}
            setTaskForUpdate={setTaskForUpdate}
            setIsEditOrAdd={setIsEditOrAdd}
            taskForUpdate={taskForUpdate}
            updateTask={updateTask}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
