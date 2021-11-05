import React from 'react'
import MyCheckbox from './UI/checkbox/MyCheckbox'
import { useState } from 'react'

const CardSelected = ({notes, setNotes}) => {
    const [data, setData] = useState([
        {title: "CSS", active: true},
        {title: "HTML", active: true},
        {title: "JavaScript", active: true},
        {title: "React", active: true},
    ])

    const notesFilter = () =>{
        const activeNotes = [];
        for (let i = 0; i < data.length; i++){
            if (data[i].active === true){
                activeNotes.push(data[i].title)
            }
        }
        return [...notes].filter(note => activeNotes.includes(note.theme)
        )
    }

    const changeBox = (index) =>{
        let newState = [...data]
        newState[index].active = !newState[index].active;
        setData(newState);
        setNotes(notesFilter())
    }
      
    return (
        <div>
            <MyCheckbox data = {data} onChange = {changeBox}/>
        </div>
    )
}

export default CardSelected