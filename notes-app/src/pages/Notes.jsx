import '../styles/Notes.css';
import '../styles/cardStyle.css';

import { useState, useEffect, useContext} from 'react';
import CardList from '../components/CardList';
import MyButtons from '../components/UI/buttons/MyButtons';
import CardForm from '../components/CardForm';
import { useNotes } from '../hooks/useNotes';
import CardFilter from '../components/CardFilter';
import { useFetching } from '../hooks/useFetching';
import jsonStudyNotes from '../studyNotes.json';
import MyLoader from '../components/UI/loader/MyLoader';
import { FirebaseContext } from '../context/firebase/firebaseContext';


function Notes() {
  
  // const [notes, setNotes]  = useState([]);
  const {loading, notes, fetchNotes, filterNotes, sortedNotes} = useContext(FirebaseContext)
  // const [notesFetching, isNotesLoading, notesError] = useFetching(
  //   () => setNotes(jsonStudyNotes)
  // )

  useEffect(() => {
    // notesFetching()
    fetchNotes()
    // eslint-disable-next-line
  }, []);
  
  const [visible, setVisible] = useState(false);
  const [sortThemeActivate, setSortThemeActivate] = useState([
    {title: "CSS", active: true},
    {title: "HTML", active: true},
    {title: "JavaScript", active: true},
    {title: "React", active: true},
  ]);
  const [filter, setFilter] = useState({sort: '', query: '', theme: sortThemeActivate})
  useNotes(filter.sort, filter.query, filter.theme);
  // filterNotes(newNotes)
  const changeBox = (e) =>{
    const newStateSortThemeActivate = [...sortThemeActivate];
    for (let theme of newStateSortThemeActivate){
      if (e.target.name === theme.title){
        theme.active = !theme.active;
      }
    }
    setSortThemeActivate(newStateSortThemeActivate);
    // filterNotes(sortThemeActivate)
  }



  // const removeCard = (note) =>{
  //     setNotes(notes.filter(n => n.id !== note.id))
  // }

  // const createCard = (newNote) => {
  //   setNotes([...notes, newNote])
  //       setVisible(false)
  // }
  
  
  return ( 
    <div className="Notes">
      <CardFilter
                filter={filter}
                setFilter={setFilter}
                onChange = {changeBox}
                data = {sortThemeActivate}
                sortedNotes ={sortedNotes}
            />
     
      <CardForm 
        // setNotes = {setNotes} 
        // notes = {notes}
        setVisible ={setVisible}
        visible = {visible}
        // create = {createCard}
        />

         <MyButtons onClick = {() => setVisible(true)}>Добавить заметку + </MyButtons>
    {loading
    ?<MyLoader/>
    //:<CardList notes = {sortedAndSearchPosts} /> 
    :<CardList notes = {notes}/>
    }

    
    </div>
  );
}

export default Notes
