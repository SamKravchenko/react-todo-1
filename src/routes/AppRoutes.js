import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import AboutPage from '../pages/AboutPage'
import ErrorPage from '../pages/ErrorPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='about' element={<AboutPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default AppRoutes
