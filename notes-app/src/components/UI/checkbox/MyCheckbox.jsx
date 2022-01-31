import React from 'react'
import cl from './MyCheckbox.module.css'
const MyCheckbox = ({data, onChange}) => {
    
    
    return (
        <div className = {cl.checkboxList}>
            {data.map((item) =>
            <div key = {item.title} className = {cl.checkboxItem}>
                <input type = 'checkbox' className = {cl.checkbox} checked = {item.active} name={item.title} onChange = {event => onChange(event)}/>
                <span>{item.title}</span>
            </div>
            )}
            
        </div>
    )
}

export default MyCheckbox
