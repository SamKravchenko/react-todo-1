import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Notes = ({ notes, onRemove }) => {
  return (
    <TransitionGroup className='list-group' component='ul'>
      {!notes.length ? (
        <CSSTransition classNames={'note-transition'} timeout={800}>
          <h1>Nothing to show</h1>
        </CSSTransition>
      ) : (
        notes.map((note) => (
          <CSSTransition
            key={note.id}
            classNames={'note-transition'}
            timeout={800}
          >
            <li className='list-group-item note'>
              <div className='note__intro'>
                <h4 className='note__intro__title'>{note.title}</h4>
                <time className='text-muted align-middle fs-6'>
                  {new Date(note.date).toLocaleString()}
                </time>
              </div>
              <button
                type='button'
                className='btn btn-close'
                onClick={() => onRemove(note.id)}
              ></button>
            </li>
          </CSSTransition>
        ))
      )}
    </TransitionGroup>
  )
}

export default Notes
