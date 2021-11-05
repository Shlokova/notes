import MyInput from './components/UI/input/MyInput';
import './styles/App.css';
import { useState } from 'react';
import CardItems from './components/CardItems';
import CardList from './components/CardList';
import MyButtons from './components/UI/buttons/MyButtons';
import CardForm from './components/CardForm';
import CardSelected from './components/CardSelected';
import { useNotes } from './hooks/useNotes';
import CardFilter from './components/CardFilter';

function App() {
  const [notes, setNotes]  = useState([
    { id:1,
      noteName: 'Название заметки',
      noteText: 'Содержимое заметки',
      theme: 'CSS',
    },
    {id:2,
      noteName: 'Название заметки',
    noteText: 'Содержимое заметки',
    theme: 'HTML',
    },
    {
      id:3,
      noteName: 'Название заметки',
      noteText: 'Содержимое заметки',
      theme: 'JavaScript',
  },
  ])

  const [visible, setVisible] = useState(false)
  const [filter, setFilter] = useState({sort: '', query: '', theme: ''})
  // const sortedAndSearchPosts = useNotes(notes, filter.sort, filter.query, filter.theme)

  const removeCard = (note) =>{
      setNotes(notes.filter(n => n.id !== note.id))
  }

  const createCard = (newNote) => {
    setNotes([...notes, newNote])
        setVisible(false)
  }
  
  
  return (
    <div className="App">
      <MyButtons onClick = {() => setVisible(true)}>+</MyButtons>
      {/* <CardFilter
                filter={filter}
                setFilter={setFilter}
            /> */}
      <CardSelected notes = {notes} setNotes = {setNotes}/>
      <CardList notes = {notes} remove = {removeCard}/>
      <CardForm 
        setNotes = {setNotes} 
        notes = {notes}
        setVisible ={setVisible}
        visible = {visible}
        create = {createCard}
        />
    </div>
  );
}

export default App;
