import React from 'react'
import cl from './MyCheckbox.module.css'
const MyCheckbox = ({data, onChange}) => {
    
    
    return (
        <div className = {cl.checkboxList}>
            {data.map((item) =>
            <div className = {cl.checkboxItem}>
                <input type = 'checkbox' className = {cl.checkbox} checked = {item.active} name={item.title} onChange = {event => onChange(event)}/>
                <lable>{item.title}</lable>
            </div>
            )}
            
        </div>
    )
}

export default MyCheckbox
