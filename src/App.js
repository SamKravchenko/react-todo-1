import React from 'react'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import AppRoutes from './routes/AppRoutes'
import AlertState from './context/alert/AlertState'
import FirebaseState from './context/firebase/FirebaseState'

const App = () => {
  return (
    <FirebaseState>
      <AlertState>
        <Navbar />
        <div className='container pt-4'>
          <Alert />
          <AppRoutes />
        </div>
      </AlertState>
    </FirebaseState>
  )
}

export default App
