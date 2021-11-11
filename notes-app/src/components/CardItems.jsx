import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext';
import MyButtonDel from './UI/buttons/MyButtonDel'


const  CardItems = ({note, remove}) => {
    const {showAlert, actionAlert} = useContext(AlertContext)
    const cardClass = ['card-items'];
    switch (note.theme){
        case 'HTML':
            cardClass.push('html-card')
            break;
        case 'CSS':
            cardClass.push('css-card')
            break;
        case 'JavaScript':
            cardClass.push('js-card')
            break;
        default:
            cardClass.push('react-card')
            break;
    } 

    const removeItem = () =>{
        showAlert('Вы уверены, что хотите удалить заметку?');
        actionAlert(remove, note.id)
    }

    return (
    
        <div className= {cardClass.join(' ')}>
            <div className = 'note-theme'>{note.theme}</div>
            <div>
                <h4>{note.noteName}</h4>
                <p>{note.noteText}</p>
            </div>
            <MyButtonDel onClick = {() => removeItem()}/>
        </div>
    )
}

export default CardItems
