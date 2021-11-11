import React, { useState } from 'react';
import MyCheckbox from './UI/checkbox/MyCheckbox';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";


const CardFilter = ({filter, setFilter, data, onChange}) => {

    return (
        <div>
            <MyInput
                value = {filter.query}
                placeholder = "Поиск..."
                onChange = {e => setFilter({...filter, query: e.target.value})}
            />
            {console.log(filter)}
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
