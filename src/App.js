import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import DisplayTasks from './DisplayTasks';
import AddTask from './AddTask';
import Today from './Today';
import Past from './Past';
import Future from './Future.js';
import Notes from './Notes';



function App() {
    // const taskList = [
    //     {id: 1, task:"Software Engineering", date: '2021-01-21' ,completed: false},
    //     {id: 2, task:"Cardio Exercise", date: '2021-01-22' ,completed: true},
    //     {id: 3, task:"Book Reading", date: '2021-01-23' ,completed: false},
    //     {id: 4, task:"Pet Time", date: '2021-01-23' ,completed: false},
    //     {id: 5, task:"Pet Time2", date: '2020-10-23' ,completed: false}
    // ];

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

    const taskList = [
        {id: 1, task:"Software Engineering", date: '2021-01-21' ,completed: false}
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



    const [showToday, setShowToday] = useState(true);
    const [showPast, setShowPast] = useState(false);
    const [showFuture, setShowFuture] = useState(false);
    const [showNotes, setShowNotes] = useState(false);

    function showHideToday () {
        // setShowToday(!showToday);
        setShowToday(true);
        setShowPast(false);
        setShowFuture(false);
        setShowNotes(false);
    };

    function showHidePast () {
        setShowPast(true);
        setShowToday(false);
        setShowFuture(false);
        setShowNotes(false);
    };

    function showHideFuture () {
        setShowFuture(true);
        setShowToday(false);
        setShowPast(false);
        setShowNotes(false);
    };

    function showHideNotes () {
        setShowNotes(true);
        setShowFuture(false);
        setShowToday(false);
        setShowPast(false);
    };


      
  return (
        <>
            
            <div className="sideNav">
                <ul>
                    <li  onClick={showHideToday}>Today</li>
                    <li  onClick={showHideFuture}>Future</li>
                    <li  onClick={showHidePast}>Past</li>
                    <li  onClick={showHideNotes}>Notes</li>

                </ul>
            </div>
            <div className="mainContent">
                <AddTask tasksList={tasks}/>


                {showToday ? <Today   key={Math.floor(Math.random() * 100000000)} tasksList={tasks}  toggleComplete={toggleComplete} dateText={dateText} dateTextBer={dateTextBer}/>
                        : null
                }

                {showPast ? <Past   key={Math.floor(Math.random() * 100000000)} tasksList={tasks}  toggleComplete={toggleComplete}  dateText={dateText} dateTextBer={dateTextBer}/>
                        : null
                }

                {showFuture ? <Future   key={Math.floor(Math.random() * 100000000)} tasksList={tasks}  toggleComplete={toggleComplete}/>
                        : null
                }

                {showNotes ? <Notes   key={Math.floor(Math.random() * 100000000)} />
                        : null
                }
            </div>
        </>
        


  );
}

export default App;
