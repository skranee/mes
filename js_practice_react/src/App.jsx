import {Task1} from "./module/task1.jsx";
import {Task2} from "./module/task2.jsx";
import {Task3} from "./module/task3.jsx";

function App() {
  return (
      <div style={{display: 'flex', flexDirection: 'column', gap: 40}}>
          <h1>Task 1</h1>
          <Task1 />
          <h1>Task 2</h1>
          <Task2 />
          <h1>Task 3</h1>
          <Task3 />
      </div>
  )
}

export default App
