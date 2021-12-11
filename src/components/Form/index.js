import React, { useState, useContext } from 'react'
import { AlertContext } from '../../context/alert/alertContext'
import { FirebaseContext } from '../../context/firebase/firebaseContext'

const Form = () => {
  const [value, setValue] = useState('')
  const { showAlert } = useContext(AlertContext)
  const { addNote } = useContext(FirebaseContext)
  const submitHandler = (e) => {
    e.preventDefault()
    if (value.trim()) {
      addNote(value.trim())
        .then(() => {
          showAlert('Note has been created!', 'success')
        })
        .catch(() => {
          showAlert('Something has broken!', 'danger')
        })
      setValue('')
    } else {
      showAlert('You must type a correct title!', 'warning')
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Type some note...'
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      </div>
    </form>
  )
}

export default Form
