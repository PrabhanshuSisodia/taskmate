import { useState, useRef } from 'react';
import './AddTask.css';

const AddTask = ({tasks, setTasks}) => {
    // const [taskValue, setTaskValue] = useState("");

    const [progress, setProgress] = useState(false);
    const taskRef = useRef("")

    // const handleChange = (event)=> {
    //     // setTaskValue(event.target.value);
    //     console.log(taskRef.current.value)
    // }

    const handleReset =( )=>{
        // setTaskValue("");
        taskRef.current.value = "";
        setProgress(false)
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 10000),
            // name: taskValue,
            name: (taskRef.current.value),
            completed: Boolean(progress)
        }
        console.log(task);
        setTasks([...tasks, task]);
        handleReset();
    }

  return (
    <section className='addtask'>
        <form onSubmit={handleSubmit}>
            {/* <label htmlFor="task">Task Name:</label> */}
            <input /*onChange={handleChange} */ type="text" name="task" id="task"
             placeholder="Task Name" autoComplete="off" ref={taskRef}></input>
             <select onChange={(event) => setProgress(event.target.value)} value={progress}>
                <option value="false">Pending</option>
                <option value="true">Completed</option>
             </select>
            <button type="submit">Add Task</button>
            <span onClick={handleReset} className='reset'>Reset</span>
        </form>
        {/* <p>{taskValue.length}</p> */}
        <p>{taskRef.current.value}</p>
    </section>
  )
}

export default AddTask
