import './TaskCard.css'
import style from './TaskCard.module.css'

const TaskCard = ({task, handleDelete}) => {
  return (
    <div className='taskcard'>
      <li className={task.completed ? 'completed': 'incomplete'}>
        <span className={style.title}>{task.id}  -  {task.name}</span>
        <button onClick={()=>handleDelete(task.id)}  type="button"  className="delete">Delete</button>
      </li>
    </div>
  )
}


export default TaskCard
