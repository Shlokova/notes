import React from 'react'
import cl from './MyButtons.module.css'

const MyButtonDel = (props) => {
    return (
        <button className = {cl.myBtnDel}{...props}>&times;</button>
    )
}

export default MyButtonDel

