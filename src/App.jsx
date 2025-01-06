import "./App.css";
import TaskForm from "./assets/components/TaskForm";
import TaskView from "./assets/components/TaskView";

function App() {
  return (
    <>
      <div className="container w-100">
        <div className="d-flex w-100 justify-content-between">
          <div className="w-25">
            <TaskForm />
          </div>
          <div className="ps-5 w-75">
            <TaskView />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
