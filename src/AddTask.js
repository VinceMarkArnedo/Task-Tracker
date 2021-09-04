import React,{useState, useEffect, useRef} from 'react'

export default function AddTask({tasksList}) {

    const [tasks, setTasks] = useState(tasksList);
    const taskRef = useRef();
    const dateRef = useRef();

    function getDT(){
        var today = new Date();
        var month = (1+today.getMonth());
    
        if(today.getMonth() <10){
          month = "0"+(1+today.getMonth());
        }
    
        var date = today.getFullYear() + "-" + month + "-" + today.getDate();
    
        return date;
          
      }

    function addTask(e){
        const newTask = taskRef.current.value;
        const taskDate = dateRef.current.value;

        const newTasks = [...tasks,
            {
              id: Math.floor(Math.random() * 100000000),
              task: newTask, 
              date: taskDate,
              completed:false
            }];
        setTasks(newTasks);
      
    }

    useEffect(() => {
        return window.localStorage.setItem('Tasks', JSON.stringify(tasks));
    }, [tasks]);


    return (
        <div className="AddTask">
            <form onSubmit={addTask}>
                <input type="text" ref={taskRef} placeholder="Add Task"/>
                <input type="date" ref={dateRef} />
                <button className="btn">Add Task</button>
            {/* <button className="btn" onClick={addTask}>Add transaction</button> */}
            </form>
        </div>
    )
}
