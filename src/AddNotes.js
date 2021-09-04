import React, {useState, useEffect, useRef} from 'react';


export default function AddNotes() {

    const noteList = [
        {id: 0, note:""}
    ];

    const [notes, setNotes] = useState(noteList);
    const refNotes = useRef();

    function addNote(e){
        const newNote = refNotes.current.value;


        const newNotes = [...notes,
            {
              id: Math.floor(Math.random() * 100000000),
              note: newNote, 
            }];
        setNotes(newNotes);
      
    }

    useEffect(() => {
        return window.localStorage.setItem('Notes', JSON.stringify(notes));
    }, [notes]);




    return (

        <div className="AddNotes">
            <form onSubmit={addNote}>
                <input type="text" ref={refNotes} placeholder="Add Notes"/>
                <button className="btn">Add Note</button>
            </form>
        </div>

    )
}
