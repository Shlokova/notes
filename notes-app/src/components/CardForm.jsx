import React, { useContext } from 'react'
import MyInput from './UI/input/MyInput'
import { useState } from 'react'
import MyButtons from './UI/buttons/MyButtons'
import MyModal from './UI/modal/MyModal'
import MySelect from './UI/select/MySelect'
import Alert from './UI/alert/Alert'
import { FirebaseContext } from '../context/firebase/firebaseContext'


const CardForm = ({create, visible, setVisible}) => {
    const [note, setNote]  = useState({
        noteName: '',
        noteText: '',
        theme: ''})

    const [visibleAlert, setVisibleAlert] = useState(false);
    const firebase = useContext(FirebaseContext)
    const addNewNote = (event)=>{
        if (!note.noteName || !note.noteText || !note.theme)
        {
            setVisibleAlert(true);
            setTimeout(()=> setVisibleAlert(false), 3000)
        }
        else{
            event.preventDefault();
            firebase.addNote(note)
                .catch((e)=>{
                console.log(e)
            });

            setNote({
                 noteName: '',
                 noteText: '',
                 theme: ''});

            setVisibleAlert(false);
            setVisible(false);
        }
        
    }


    return (
        <MyModal visible = {visible} setVisible = {setVisible}>
            <Alert visible = {visibleAlert} type = 'danger'>
                Пожалуйста, заполните все данные!
            </Alert>
            <MyInput 
                className = 'form-input'
                value = {note.noteName}
                onChange = {e => setNote({...note, noteName : e.target.value})}
                placeholder = 'Введите название заметки'
            />
            <textarea 
                className = 'form-text'
                value = {note.noteText} 
                placeholder = 'Введите текст заметки'
                onChange = {e => setNote({...note, noteText : e.target.value})}>
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
