import {useMemo} from "react";

export const useSortedNotes = (notes,sort) =>{
    const sortedNotes = useMemo(() => {
        if (sort) {
            return [...notes].sort(((a, b) => a[sort].localeCompare(b[sort])))
        }
        return notes;
    }, [sort, notes])
    return sortedNotes;
}

export const useNotes = (notes,sort,query) =>{
    const sortedNotes = useSortedNotes(notes,sort);
    const sortedAndSearchNotes = useMemo(() => {
        return sortedNotes.filter(note => note.theme.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedNotes]);

    return sortedAndSearchNotes;

}

export const useSortedThemeNotes = (notes,sort,query, theme) => {
    const sortedNotes = useNotes(notes,sort, query);
    const sortedAndSearchThemeNotes = useMemo(() => {
        return sortedNotes.filter(note => note.theme.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedNotes]);

    return sortedAndSearchThemeNotes;
}