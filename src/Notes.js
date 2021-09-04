import React, {useState} from 'react'
import AddNotes from './AddNotes';
import Note from './Note';

export default function Notes() {

    const storedNotes = JSON.parse(localStorage.getItem("Notes"));

    const [notes, setNotes] = useState(storedNotes);

    return (
        <div>
           <AddNotes />

           {notes != null ? notes.map(
               note => {
                        return <Note key={note.id} note={note} />
                    }
               )
               : "A"
            }
        </div>
    )
}
