import {useMemo} from "react";

export const useSortedNotes = (notes,sort) =>{
    
    const sortedNotes = useMemo(() => {
        console.log('sort')
        if (sort) {
            return [...notes].sort(((a, b) => a[sort].localeCompare(b[sort])))
        }
        return notes;
    }, [sort, notes])
    return sortedNotes;
}

export const useSortedAndSearchNotes = (notes,sort,query) =>{
    
    const sortedNotes = useSortedNotes(notes,sort);
    const sortedAndSearchNotes = useMemo(() => {
        console.log('query')
        return sortedNotes.filter(note => note.noteName.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedNotes]);

    return sortedAndSearchNotes;

}

export const useNotes = (notes,sort ,query, theme) => {
    const sortedNotes = useSortedAndSearchNotes(notes,sort, query);
    
    // console.log(sortedNotes)
    // console.log(theme.reduce((item, sum => sum && item)))
    const sortedAndSearchThemeNotes = useMemo(() => {
        console.log('theme')
        return sortedNotes.filter(note => !!theme.find((item) => item.title === note.theme && item.active === true))
            
    }, [theme.values(), sortedNotes]);

    return sortedAndSearchThemeNotes;
}