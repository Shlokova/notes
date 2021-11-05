import React from 'react'

const MyCheckbox = ({data, onChange}) => {
    
    
    return (
        <div>
            {data.map((item, index) =>
            <div>
                <lable>{item.title}</lable>
                <input type = 'checkbox' checked = {item.active} name={item.title} onChange = {event => onChange(event)}/>
            </div>
            )}
            
        </div>
    )
}

export default MyCheckbox
