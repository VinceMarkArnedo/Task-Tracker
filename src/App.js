import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import DisplayTasks from './DisplayTasks';
import AddTask from './AddTask';
import Today from './Today';
import Past from './Past';
import Future from './Future.js';


function App() {
    const taskList = [
        {id: 1, task:"Software Engineering", date: '2021-01-21' ,completed: false},
        {id: 2, task:"Cardio Exercise", date: '2021-01-22' ,completed: true},
        {id: 3, task:"Book Reading", date: '2021-01-23' ,completed: false},
        {id: 4, task:"Pet Time", date: '2021-01-23' ,completed: false}
    ];

    const storedTasks = JSON.parse(localStorage.getItem("Tasks"));

	  const[tasks, setTasks] = useState(storedTasks || taskList);
    

    useEffect(() => {
        return window.localStorage.setItem('Tasks', JSON.stringify(tasks));
        console.log("A"+JSON.stringify(tasks));
    }, [tasks]);


    function toggleComplete(id){
              const newTask = [...tasks];

              const taskToChange = newTask.find(t => t.id === id);
              taskToChange.completed  = !taskToChange.completed;
              setTasks(newTask);

    }


  return (

        <div className="Container">
            <AddTask tasksList={tasks}/>
            {/* <DisplayTasks key={Math.floor(Math.random() * 100000000)} tasksList={tasks} toggleComplete={toggleComplete}/> */}
            <Today  key={Math.floor(Math.random() * 100000000)} tasksList={tasks}  toggleComplete={toggleComplete}/>
            <Past  key={Math.floor(Math.random() * 100000000)} tasksList={tasks}  toggleComplete={toggleComplete}/>
            <Future   key={Math.floor(Math.random() * 100000000)} tasksList={tasks}  toggleComplete={toggleComplete}/>
        </div> 


  );
}

export default App;
