import React, { useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FirebaseContext } from '../context/firebase/firebaseContext';
import CardItems from './CardItems'


    function CardList() {

    const {notes,  removeNote} = useContext(FirebaseContext);
    if (!notes.length) {
        return (
            <div>Заметок нет...</div>
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
                    <CardItems 
                        note={item}
                        remove={ removeNote } />
                </CSSTransition>
                )}
                </TransitionGroup>
            </div>
        
    );
}

export default CardList
