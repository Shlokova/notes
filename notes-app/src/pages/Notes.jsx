import '../styles/Notes.css';
import '../styles/cardStyle.css';

import { useState, useEffect, useContext} from 'react';
import CardList from '../components/CardList';
import MyButtons from '../components/UI/buttons/MyButtons';
import CardForm from '../components/CardForm';
import { useNotes } from '../hooks/useNotes';
import CardFilter from '../components/CardFilter';
import MyLoader from '../components/UI/loader/MyLoader';
import { FirebaseContext } from '../context/firebase/firebaseContext';


function Notes() {
  const {loading,fetchNotes,sortedNotes, notes} = useContext(FirebaseContext)

  useEffect(() => {
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
  useNotes(notes, filter.sort, filter.query, filter.theme);
  
  const changeBox = (e) =>{
    const newStateSortThemeActivate = [...sortThemeActivate];
    for (let theme of newStateSortThemeActivate){
      if (e.target.name === theme.title){
        theme.active = !theme.active;
      }
    }
    setSortThemeActivate(newStateSortThemeActivate);
  }

  
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
        setVisible ={setVisible}
        visible = {visible}
        />

         <MyButtons onClick = {() => setVisible(true)}>Добавить заметку + </MyButtons>
    {loading
    ?<MyLoader/>
    :<CardList/>
    }

    
    </div>
  );
}

export default Notes
