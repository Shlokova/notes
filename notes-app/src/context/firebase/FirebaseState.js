import axios from 'axios';
import React, { useReducer } from 'react'
import { ADD_NOTE, FETCH_NOTES, FILTER_NOTES, REMOVE_NOTE, SEARCH_NOTES, SHOW_LOADER, SORTED_NOTES } from '../types';
import { FirebaseContext } from './firebaseContext'
import { firebaseReduser } from './firebaseReduser'

const url = process.env.REACT_APP_DB_URL;

const FirebaseState = ({children}) => {

    const initialState = {
        notes: [],
        sortedNotes:[],
        loading: false,
    }
    const [state, dispatch] = useReducer(firebaseReduser, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const fetchNotes = async() => {
        showLoader();
        const response = await axios.get(`${url}/notes.json`);
        const payload = Object.keys(response.data).map( key =>{
            return {
                ...response.data[key],
                id: key
            }
        }
            
        );
        dispatch({
            type: FETCH_NOTES,
            payload
        })
    }


    const addNote = async ({noteName, noteText, theme}) =>{
        
        const note = {
            noteName, noteText, theme, date: new Date().toJSON()
        }
        try{
            const response = await axios.post(`${url}/notes.json`, note);
            const payload = {
                ...note,
                id: response.data.name
            }
            
            dispatch({
                type: ADD_NOTE,
                payload
            })
            
        }
        catch(e){
            throw new Error(e.messege)
        }
        
    }

    const removeNote =  async id =>{
        await axios.delete(`${url}/notes/${id}.json`);
        dispatch({
            type:REMOVE_NOTE,
            payload: id
        })
    }

    const filterNotes = (theme, query) =>{
        searchNotes(query)
        dispatch({
            type: FILTER_NOTES,
            payload: theme
        })
    }

    const sortNotes = (sort) =>{
        dispatch({
            type: SORTED_NOTES,
            payload: sort
        })
    }

    const searchNotes = (query) =>{
        dispatch({
            type: SEARCH_NOTES,
            payload: query
        })
    }

    return (
        <FirebaseContext.Provider value ={{
           showLoader, addNote, fetchNotes, removeNote, 
           filterNotes, sortNotes, searchNotes,
           loading:state.loading,
           notes: state.sortedNotes
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState
