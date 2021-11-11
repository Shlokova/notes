import {useContext, useMemo} from "react";
import { FirebaseContext } from "../context/firebase/firebaseContext";



export const useSortedNotes = (notes,sort) =>{
    const {sortNotes} = useContext(FirebaseContext);
    useMemo(() => { 
        if (sort) {
            sortNotes(sort)
        }
        
    }, [sort, notes.length]);
}

export const useSortedAndSearchNotes = (notes,sort,query) =>{
    
    useSortedNotes(notes,sort);
    const {searchNotes} = useContext(FirebaseContext);
    useMemo(() => {
        if (query){
            searchNotes( query );
        }
    }, [query, notes.length]);

}

export const useNotes = (notes, sort ,query, theme) => {
    useSortedAndSearchNotes(notes, sort, query);
    const {filterNotes} = useContext(FirebaseContext);
    useMemo(() => {
        filterNotes(theme, query);

    }, [theme[0].active, theme[1].active, theme[2].active, theme[3].active, query, notes.length]);
}