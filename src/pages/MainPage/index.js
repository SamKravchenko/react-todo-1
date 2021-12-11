import React, { useContext, useEffect } from 'react'
import Form from '../../components/Form'
import Loader from '../../components/Loader'
import Notes from '../../components/Notes'
import { AlertContext } from '../../context/alert/alertContext'
import { FirebaseContext } from '../../context/firebase/firebaseContext'

const MainPage = () => {
  const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext)
  const { showAlert } = useContext(AlertContext)
  const removeHandler = (id) => {
    removeNote(id)
    showAlert('Note has been removed!', 'warning')
  }
  useEffect(() => {
    if (notes.length) return
    fetchNotes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Form />
      <hr />
      {loading ? <Loader /> : <Notes notes={notes} onRemove={removeHandler} />}
    </>
  )
}

export default MainPage
