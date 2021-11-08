import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import cl from './Alert.module.css'
const AlertDanger = ({children, visible, type}) => {
    const styleClass = [cl[type]]
    if (visible){
        styleClass.push(cl.active);
    }


    return (
        <CSSTransition in={visible} timeout={500} classNames={cl.alert}>
                    <div className = {styleClass.join(' ')}>
                         {children}
                    </div>
        </CSSTransition>
    )
}

export default AlertDanger
