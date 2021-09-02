import React from 'react'

export default function Tasks({task, toggleComplete}) {

    function handleChangeChecked() {
        toggleComplete(task.id);
    }


    return (
        <tr>
            <td className="task">{task.task}</td>
            {/* <td className="taskDate">{task.date}</td> */}
            <td className="taskBox">
                <input type="checkbox" 
                checked={task.completed === true ? true: false}  
                disabled={task.completed === true ? true: false} 
                onChange={handleChangeChecked}/>
            </td>
        </tr>
    )
}
