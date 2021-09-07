import React from 'react'

export default function Tasks({task, toggleComplete}) {

    function handleChangeChecked() {
        toggleComplete(task.id);
    }


    return (
        // <tr>
        //     <td className="task">{task.task}</td>
        //     <td className="taskBox">
        //         <input type="checkbox"  className="checkbox-round"
        //         checked={task.completed === true ? true: false}  
        //         disabled={task.completed === true ? true: false} 
        //         onChange={handleChangeChecked}/>
        //     </td>
        // </tr>
        <>
            <li>
                <table>
                    <tr>
                        <td className="taskDate">
                            <input type="checkbox"  className="checkbox-round"
                            checked={task.completed === true ? true: false}  
                            disabled={task.completed === true ? true: false} 
                            onChange={handleChangeChecked}/>
                        </td>
                        <td className="task">
                            {task.task} 
                        </td>
                        {/* <td className="taskDate">
                        <input type="checkbox"  className="checkbox-round"
                            checked={task.completed === true ? true: false}  
                            disabled={task.completed === true ? true: false} 
                            onChange={handleChangeChecked}/>
                        </td> */}
                    </tr>
                </table>
                    
                {/* <input type="checkbox"  className="checkbox-round"
                checked={task.completed === true ? true: false}  
                disabled={task.completed === true ? true: false} 
                onChange={handleChangeChecked}/> */}
            </li>

        </>
    )
}
