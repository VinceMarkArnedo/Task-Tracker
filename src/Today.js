import React from 'react';
import Tasks from './Tasks';

export default function Today({tasksList, toggleComplete, dateText, dateTextBer}) {
    const date = new Date();
    console.log(date);

    var month = (1+date.getMonth());
    var day = (1+date.getDate());

    if(date.getMonth() <10){    month = "0"+(1+date.getMonth());    }

    if(date.getDate() <10){     day = "0"+(date.getDate());     }

    var today = date.getFullYear() + "-" + month + "-" + day;
    console.log(today);

    let dateTimes = tasksList.map(t => {
        return t.date;
    });

    const getUniqueValues = array => [...new Set(array)];
    
    dateTimes = getUniqueValues(dateTimes);
    console.log(dateTimes);

    // const dateText = [
    //     {id: "01", month: "January"},
    //     {id: "02", month: "February"},
    //     {id: "03", month: "March"},
    //     {id: "04", month: "April"},
    //     {id: "05", month: "May"},
    //     {id: "06", month: "June"},
    //     {id: "07", month: "July"},
    //     {id: "08", month: "August"},
    //     {id: "09", month: "September"},
    //     {id: "10", month: "October"},
    //     {id: "11", month: "November"},
    //     {id: "12", month: "December"}
    // ];

    // const dateTextBer = [
    //     {id: "09", month: "September"},
    //     {id: "10", month: "October"},
    //     {id: "11", month: "November"},
    //     {id: "12", month: "December"}
    // ];

    function formatDate(date) {
        var d = new Date(date);
        
        var weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        return weekday[d.getDay()];;
    }

    return (<>
        {dateTimes.map(dItem => {
            if(dItem === today){
                const n = parseInt(dItem.slice(5,6)) === 0 ? dateText[(parseInt(dItem.slice(6,7)))-1].month : dateTextBer[(parseInt(dItem.slice(6,7)))+1].month;
            return (<>
            <div className="Today">
                <p><b>Today</b> <span>{formatDate(dItem)}</span> <span>{n}</span> <span>{dItem.slice(8,10)}</span></p>
                {tasksList.map(task => {
                    if(task.date === today){
                        return (<>
                                <ul>
                                    <Tasks key={task.id} task={task} toggleComplete={toggleComplete}/>
                                </ul>
                        </>);
                    }
                })}
            </div>    

            </>)}
        })}

    </>);
}
