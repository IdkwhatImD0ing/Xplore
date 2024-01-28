import {UserButton} from '@clerk/nextjs'
import React from 'react'
import LandingPage from './components/landingpage'

function App() {
  return (
    <>
      <UserButton />
      <LandingPage />
    </>
  )
}

export default App
