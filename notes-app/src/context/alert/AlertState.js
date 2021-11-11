import React, { useReducer } from 'react'
import { ALERT_ACTION, ALERT_ANSWER, HIDE_ALERT, SHOW_ALERT } from '../types';
import { AlertContext } from './alertContext'
import { alertReduser } from './alertReduser'

const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReduser, {visible: false, answer: ''});

    const showAlert = (text) =>{
        dispatch({
            type: SHOW_ALERT,
            payload: {text}
        })
    }

    const hideAlert = () =>{
        dispatch({
            type: HIDE_ALERT
        })
    }
    const answerAlert = (answer) =>{
        dispatch({
            type: ALERT_ANSWER,
            payload: {answer}
        })
        
    }

    const actionAlert = (action, args) =>{
        dispatch({
            type: ALERT_ACTION,
            payload:{action, args}
        })
    }
    return (
        <AlertContext.Provider value = {{
            showAlert, hideAlert, answerAlert, actionAlert, 
            alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertState
