import react from 'react';
import{ useState } from 'react';
const App= () =>{
  const [task, setTask] = react.useState("");
  const [tasks, setTasks] = react.useState([]);
  function addTask()
  {
     setTasks([...tasks, task]);
     setTask("");
  }


  const deleteTask = (index) => {

    const updatedTasks = tasks.filter((item, i) => i !== index);

    setTasks(updatedTasks);
  }

 return(

 
    <div>
      <h1>Dynamic List</h1>
      <p>Click the button to add a new item to the list.</p>
        <input
        type="text"
        placeholder="Enter task"    
        value={task}
        onChange={(e) => setTask(e.target.value)}>
       </input>
       
       <button onClick={addTask}>
        Add
      </button>
       <ul>

        {tasks.map((item, index) => (

          <li key={index}>

            {item}

            <button onClick={() => deleteTask(index)}>
              Delete
            </button>

          </li>

        ))}

      </ul>
    </div>
  )
}
export default App;