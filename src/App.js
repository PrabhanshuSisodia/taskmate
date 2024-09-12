import React, { useState } from 'react'
import './App.css';
import Header from "./components/Header";
import Tasklist from './components/Tasklist'
import Footer from './components/Footer';
import AddTask from './components/AddTask';

function App (){
  const [tasks, setTasks] = useState([ ])

  return (
    <div className='App'>
        <Header />
        <main>
          <AddTask  tasks={tasks} setTasks={setTasks} />  
          <Tasklist title="Random" subtitle="Test" tasks={tasks} setTasks={setTasks}/>
        </main>
        <Footer />
    </div>
  )
}

export default App
