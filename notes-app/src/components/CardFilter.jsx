import React, { useState } from 'react';
import MyCheckbox from './UI/checkbox/MyCheckbox';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";


const CardFilter = ({data, filter, setFilter, onChange}) => {
    

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

    

    return (
        <div>
            <MyInput
                value = {filter.query}
                placeholder = "Поиск..."
                onChange = {e => setFilter({...filter, query: e.target.value})}
            />
            <div className='filter'>
                <MyCheckbox data = {data} onChange = {onChange}/>
            <MySelect
                value={filter.sort}
                defaultValue='Сортировка по'
                option={
                    [
                        {value: 'theme', name: 'По теме'},
                        {value: 'noteName', name: 'По названию'}
                    ]
                }
                onChange = {selectedSort => setFilter({...filter, sort: selectedSort})}
            />
            </div>
        </div>
    )
}

export default CardFilter
