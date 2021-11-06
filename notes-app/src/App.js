import './styles/App.css';
import { useState } from 'react';
import CardList from './components/CardList';
import MyButtons from './components/UI/buttons/MyButtons';
import CardForm from './components/CardForm';
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

  const [visible, setVisible] = useState(false);
  const [sortThemeActivate, setSortThemeActivate] = useState([
    {title: "CSS", active: true},
    {title: "HTML", active: true},
    {title: "JavaScript", active: true},
    {title: "React", active: true},
  ]);
  const [filter, setFilter] = useState({sort: '', query: '', theme: sortThemeActivate})
  const sortedAndSearchPosts = useNotes(notes, filter.sort, filter.query, filter.theme)
  
  const changeBox = (e) =>{
    console.log(sortThemeActivate[0])
    const newStateSortThemeActivate = [...sortThemeActivate];
    for (let theme of newStateSortThemeActivate){
      if (e.target.name === theme.title){
        theme.active = !theme.active;
      }
    }
    setSortThemeActivate(newStateSortThemeActivate);
  }
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
      <CardFilter
                filter={filter}
                setFilter={setFilter}
                onChange = {changeBox}
                data = {sortThemeActivate}
            />
     
      <CardForm 
        setNotes = {setNotes} 
        notes = {notes}
        setVisible ={setVisible}
        visible = {visible}
        create = {createCard}
        />

    <CardList notes = {sortedAndSearchPosts} remove = {removeCard}/>
    </div>
  );
}

export default App;
