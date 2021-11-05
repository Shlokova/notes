import React, { useState } from 'react';
import MyCheckbox from './UI/checkbox/MyCheckbox';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";


const CardFilter = ({filter, setFilter}) => {
    const [data, setData] = useState([
        {title: "CSS", active: true},
        {title: "HTML", active: true},
        {title: "JavaScript", active: true},
        {title: "React", active: true},
    ])

    // const notesFilter = () =>{
    //     const activeNotes = [];
    //     for (let i = 0; i < data.length; i++){
    //         if (data[i].active === true){
    //             activeNotes.push(data[i].title)
    //         }
    //     }
    //     return [...notes].filter(note => activeNotes.includes(note.theme)
    //     )
    // }

    // const changeBox = (index) =>{
    //     let newState = [...data]
    //     newState[index].active = !newState[index].active;
    //     setData(newState);
    //     setNotes(notesFilter())
    // }

    return (
        <div>
            <MyInput
                value = {filter.query}
                placeholder = "Поиск..."
                onChange = {e => setFilter({...filter, query: e.target.value})}
            />

            <MySelect
                value={filter.sort}
                defaultValue='Сортировка по'
                option={
                    [
                        {value: 'theme', name: 'По названию'},
                        {value: 'cardName', name: 'По описанию'}
                    ]
                }
                onChange = {selectedSort => setFilter({...filter, sort: selectedSort})}
            />
            <div>
                <MyCheckbox data = {data} onChange = {selectedSort => setFilter({...filter, theme: selectedSort})}/>
            </div>
        </div>
    )
}

export default CardFilter
