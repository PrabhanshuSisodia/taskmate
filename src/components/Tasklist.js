import { useState } from "react";
import TaskCard from "./TaskCard";
import BoxCard from "./BoxCard";
import './Tasklist.css'

const Tasklist = ({ tasks, setTasks}) => {
    

    function handleDelete(id){
       setTasks(tasks.filter(task => task.id !== id));
    }

    const [show, setShow] = useState(true);
  return (
    <section className="tasklist">
      <ul >
      <div>
        <h1>Task List </h1>
        <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
      </div>  
        { show && tasks.map((task)=>(
            <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
        ))
        }
      </ul>
      {/* <BoxCard result="success">
        <p className="title">lorem ipsum jsLK</p>
        <p className="description">Lorem ipsum sit doalr consetcure adipuruhs fslsna</p>
      </BoxCard>

      <BoxCard result="warning">
        <p className="title">lorem ipsum chin damak dum dum</p>
        <p className="description">Lorem ipsum sit doalr consetcure adipuruhs btana mujhe akya hau thab fslsna</p>
        <p>Lorem ipsum sit doalr consetcure adipuruhs btana mujhe akya hau thab fslsna</p>
      </BoxCard> */}
      
      {/* <div className="box warning">
        <p className="title">lorem ipsum chin damak dum dum</p>
        <p className="description">Lorem ipsum sit doalr consetcure adipuruhs btana mujhe akya hau thab fslsna</p>
      </div>
      <div className="box alert">
        <p className="title">lorem ipsum </p>
        <p className="description">Lorem ipsum sit doalr consetcure adipuruhs jmene bola th ausitme ki  uhe nhi ata h fir v b log nh amane fslsna</p>
      </div> */}
    </section>
  )
}

export default Tasklist
