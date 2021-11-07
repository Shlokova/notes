import React from 'react'
import MyInput from './UI/input/MyInput'
import { useState } from 'react'
import MyButtons from './UI/buttons/MyButtons'
import MyModal from './UI/modal/MyModal'
import MySelect from './UI/select/MySelect'

const CardForm = ({create, visible, setVisible}) => {
    const [note, setNote]  = useState({
        id: '',
        noteName: '',
        noteText: '',
    theme: ''})
    const addNewNote = (event)=>{
        event.preventDefault();
        const newNote = {...note, id: new Date()};
        create(newNote)
        setNote({
            id: '',
            noteName: '',
            noteText: '',
            theme: ''})
    }
    return (
        <MyModal visible = {visible} setVisible = {setVisible}>
            <MyInput 
                className = 'form-input'
                value = {note.noteName}
                onChange = {e => setNote({...note, noteName : e.target.value})}
                placeholder = 'Введите заголовок'
            />
            <textarea 
                className = 'form-text'
                value = {note.noteText} 
                onChange = {e => setNote({...note, noteText : e.target.value})}>
                placeholder = 'Введите текст'
            </textarea>
            <MySelect 
                value = {note.theme} 
                onChange = {e => setNote({...note, theme : e})} 
                defaultValue = "Выберите тему"
                option = {[
                    {value: 'CSS', name: 'CSS'},
                    {value: 'HTML', name: 'HTML'},
                    {value: 'JavaScript', name: 'JavaScript'},
                    {value: 'React', name: 'React'},
                ]}
                />
            <MyButtons className = 'form-btn' onClick = {(e) => addNewNote(e)}>Добавить</MyButtons>
        
        </MyModal>
    )
}

export default CardForm
