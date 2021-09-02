import React from 'react';
import Tasks from './Tasks';

export default function Today({tasksList, toggleComplete}) {
    const date = new Date();
    console.log(date);

    var month = (1+date.getMonth());
    var day = (1+date.getDate());

    if(date.getMonth() <10){
      month = "0"+(1+date.getMonth());
    }

    if(date.getDate() <10){
        day = "0"+(date.getDate());
    }

    var today = date.getFullYear() + "-" + month + "-" + day;
    console.log(today);

    let dateTimes = tasksList.map(t => {
        return t.date;
    });

    const getUniqueValues = array => [...new Set(array)];
    
    dateTimes = getUniqueValues(dateTimes);
    console.log(dateTimes);

    return (<>
        {dateTimes.map(dItem => {
            if(dItem === today){
            return (<>
            <div className="Today">
                <h4>Today is {dItem}</h4>
                {tasksList.map(task => {
                    if(task.date === today){
                        return (<>
                                <table key={task.id} >
                                <tbody>
                                    <Tasks key={task.id} task={task}  toggleComplete={toggleComplete}/>
                                </tbody>     
                           </table>
                        </>);
                    }
                })}
            </div>    

            </>)}
        })}

    </>);
}
