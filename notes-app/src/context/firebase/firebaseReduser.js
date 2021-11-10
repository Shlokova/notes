import { useNotes } from "../../hooks/useNotes"
import { ADD_NOTE, FETCH_NOTES, FILTER_NOTES, REMOVE_NOTE, SEARCH_NOTES, SHOW_LOADER, SORTED_NOTES } from "../types"

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_NOTE]: (state, {payload}) => ({
        ...state,
        notes: [...state.notes, payload],
        sortedNotes: [...state.notes, payload],
    }),
    [FETCH_NOTES]: (state, {payload}) => ({
        ...state,
        notes:  payload,
        sortedNotes:  payload,
        loading: false
    }),
    [REMOVE_NOTE]: (state, {payload}) => ({
        ...state,
        notes: state.notes.filter(note => note.id !== payload),
        sortedNotes: state.sortedNotes.filter(note => note.id !== payload)
    }),
    [FILTER_NOTES]: (state, {payload}) =>({
        ...state,
        sortedNotes: state.sortedNotes.filter(note => !!payload.find((item) => item.title === note.theme && item.active === true))

    }),
    [SORTED_NOTES]: (state, {payload}) =>({
        ...state,
        notes: [...state.notes].sort(((a, b) => a[payload].localeCompare(b[payload]))),
        sortedNotes: [...state.sortedNotes].sort(((a, b) => a[payload].localeCompare(b[payload]))),

    }),
    [SEARCH_NOTES]: (state, {payload}) =>({
        ...state,
        sortedNotes: state.notes.filter(note => note.noteName.toLowerCase().includes(payload.toLowerCase()))

    }),
    DEFAULT: state => state
}

export const firebaseReduser = (state, action) => {
    const handler  = handlers[action.type] || handlers.DEFAULT
return handler(state, action)
}