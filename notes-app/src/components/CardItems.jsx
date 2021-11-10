import React from 'react'
import MyButtonDel from './UI/buttons/MyButtonDel'


const  CardItems = (props) => {
    const cardClass = ['card-items'];
    switch (props.note.theme){
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

    return (
    
        <div className= {cardClass.join(' ')}>
            <div className = 'note-theme'>{props.note.theme}</div>
            <div>
                <h4>{props.note.noteName}</h4>
                <p>{props.note.noteText}</p>
            </div>
            <MyButtonDel onClick = {() => props.remove(props.note.id)}/>
        </div>
    )
}

export default CardItems
