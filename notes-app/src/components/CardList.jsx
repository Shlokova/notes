import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CardItems from './CardItems'

function CardList({ notes, remove }) {
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
                    <CardItems note={item} key={index} number={index + 1} remove={remove} />
                </CSSTransition>
                )}
                </TransitionGroup>
            </div>
        
    );
}

export default CardList
