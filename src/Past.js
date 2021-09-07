import React from 'react';
import Tasks from './Tasks';

export default function Past({tasksList, toggleComplete, dateText, dateTextBer}) {

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
    // dateTimes.sort();

    dateTimes.sort(function(o1,o2){
        if (o1 > o2)    return -1;
        else if(o1 < o2) return  1;
        else                      return  0;
      });

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
        
        var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return weekday[d.getDay()];;
    }


    return (<>
        
        {dateTimes.map(dItem => {
            if(dItem < today){
                // (<h4><span>{dItem.slice(0,4)}</span></h4>)
                console.log(dItem);
                const n = parseInt(dItem.slice(5,6)) === 0 ? dateText[(parseInt(dItem.slice(6,7)))-1].month : dateTextBer[(parseInt(dItem.slice(6,7)))+1].month;
                return (<>
                    
                    <div className="Past">
                    {/* <h4><span>{dItem.slice(0,4)}</span></h4> */}
                    {/* <h5><span>{n}</span> <span>{dItem.slice(8,10)}</span></h5> */}
                    {tasksList.map(task => {
                        if(task.date === dItem){
                            
                            return (<>
                                <h5><span>{n}</span> <span>{dItem.slice(8,10)}</span>   <span>{formatDate(dItem)}</span></h5>
                                <ul>
                                    <Tasks key={task.id} task={task} toggleComplete={toggleComplete}/>
                                </ul>
                            </>);
                        }
                    })}
                    </div>
            </>)
            }
        })}




    </>);
}
