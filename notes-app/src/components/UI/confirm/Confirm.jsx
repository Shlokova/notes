import React, { useContext } from 'react'
import { AlertContext } from '../../../context/alert/alertContext'
import cl from './Confirm.module.css'
import MyButtons from '../buttons/MyButtons'


const Confirm = () => {

    const {alert, answerAlert} = useContext(AlertContext)
    if (!alert.visible){
        return null
    }
    return (
        <div className = {cl.modal}>
        <div className = {cl.confirm}>
            <h3>{alert.text}</h3>
            <div className = {cl.buttons}>
            <MyButtons onClick = {() => {
                answerAlert('Yes');
                alert.action(alert.actionArgs);
            }}>	&#160; Да &#160;</MyButtons>
            <MyButtons onClick = {() => answerAlert('No')}>	&#160; Нет 	&#160;</MyButtons>
            </div>
        </div>
        </div>
    )
}

export default Confirm
