import {useContext, useMemo} from "react";
import { FirebaseContext } from "../context/firebase/firebaseContext";



export const useSortedNotes = (sort) =>{
    const {sortNotes} = useContext(FirebaseContext);
    useMemo(() => { 
        if (sort) {
            sortNotes(sort)
        }
        
    }, [sort]);
}

export const useSortedAndSearchNotes = (sort,query) =>{
    
    useSortedNotes(sort);
    const {searchNotes} = useContext(FirebaseContext);
    useMemo(() => {
        console.log('query')
        if (query){
            searchNotes( query );
        }
    }, [query]);

}

export const useNotes = (sort ,query, theme) => {
    useSortedAndSearchNotes(sort, query);
    const {filterNotes} = useContext(FirebaseContext);
    useMemo(() => {
        filterNotes(theme, query);

    }, [theme[0].active, theme[1].active, theme[2].active, theme[3].active, query]);
}