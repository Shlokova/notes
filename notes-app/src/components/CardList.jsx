import React, { useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FirebaseContext } from '../context/firebase/firebaseContext';
import CardItems from './CardItems'

// function CardList({ notes, remove }) {
    function CardList() {

    const {notes,  removeNote} = useContext(FirebaseContext);
    if (!notes.length) {
        return (
            <div>Ничего нет...</div>
        );
    }
    return (
        
            <div className='card-list'>
            <TransitionGroup>
                {notes.map((item, index) => <CSSTransition
                    key={item.id}
                    timeout={400}
                    classNames="card"
                >
                    <CardItems note={item}  number={index + 1} remove={ removeNote } />
                </CSSTransition>
                )}
                </TransitionGroup>
            </div>
        
    );
}

export default CardList
