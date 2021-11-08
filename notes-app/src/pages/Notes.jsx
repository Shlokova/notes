import '../styles/Notes.css';
import '../styles/cardStyle.css';

import { useState, useEffect} from 'react';
import CardList from '../components/CardList';
import MyButtons from '../components/UI/buttons/MyButtons';
import CardForm from '../components/CardForm';
import { useNotes } from '../hooks/useNotes';
import CardFilter from '../components/CardFilter';
import { useFetching } from '../hooks/useFetching';
import jsonStudyNotes from '../studyNotes.json';
import MyLoader from '../components/UI/loader/MyLoader';


function Notes() {
  
  const [notes, setNotes]  = useState([]);
  const [notesFetching, isNotesLoading, notesError] = useFetching(
    () => setNotes(jsonStudyNotes)
  )
  useEffect(() => {
    notesFetching()
  }, []);

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
    <div className="Notes">
     {/* <MyNavbar/> */}
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
         <MyButtons onClick = {() => setVisible(true)}>Добавить заметку + </MyButtons>
    {isNotesLoading
    ?<MyLoader/>
    :<CardList notes = {sortedAndSearchPosts} remove = {removeCard}/>}
    
    </div>
  );
}

export default Notes
