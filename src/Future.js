import React from 'react';
import Tasks from './Tasks';

export default function Future({tasksList, toggleComplete}) {

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

    const dateText = [
        {id: "01", month: "January"},
        {id: "02", month: "February"},
        {id: "03", month: "March"},
        {id: "04", month: "April"},
        {id: "05", month: "May"},
        {id: "06", month: "June"},
        {id: "07", month: "July"},
        {id: "08", month: "August"},
        {id: "09", month: "September"},
        {id: "10", month: "October"},
        {id: "11", month: "November"},
        {id: "12", month: "December"}
    ];

    const dateTextBer = [
        {id: "09", month: "September"},
        {id: "10", month: "October"},
        {id: "11", month: "November"},
        {id: "12", month: "December"}
    ];

    return (<>

        {dateTimes.map(dItem => {
            if(dItem > today){       
                const n = parseInt(dItem.slice(5,6)) > 0 ? dateTextBer[(parseInt(dItem.slice(6,7)))+1].month : dateText[parseInt(dItem.slice(5,7))].month;
                console.log("N: "+n +" dItem: "+dItem);
            return (<>
            <div className="Future">
                <h5><span>{n}</span> <span>{dItem.slice(8,10)}</span></h5>
                {tasksList.map(task => {
                    if(task.date === dItem){
                        return (<>
                            <table key={task.id} >
                                <tbody>
                                    <Tasks key={task.id} task={task} toggleComplete={toggleComplete}/>
                                </tbody>
                                
                           </table>
                    </>);
                    }
                })}
            </div>
            </>)
            }
        })}




    </>);
}
