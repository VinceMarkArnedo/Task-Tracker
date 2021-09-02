import React,{useState} from 'react'
import Tasks from './Tasks';

export default function DisplayTasks({tasksList, toggleComplete}) {


    let dateTimes = tasksList.map(t => {
        return t.date;
    });

    const getUniqueValues = array => [...new Set(array)];
    
    dateTimes = getUniqueValues(dateTimes);

    return (<>
        {dateTimes.map(dItem => {
            return (<>
                <h5>{dItem}</h5>
                {tasksList.map(task => {
                    if(dItem === task.date){
                        return (<>
                            <table key={task.id} >
                                <tbody>
                                    <Tasks key={task.id} task={task} toggleComplete={toggleComplete}/>
                                </tbody>
                                
                           </table>
                    </>);
                    }
                })}
            </>)
        })}

    </>);
}
