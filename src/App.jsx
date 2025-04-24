import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Header } from './Layaout/Header/header'
import { MainContainer } from './Layaout/MainContainer/MainContainer'
import { Footer } from './Layaout/Footer/Footer'

function App() {
  

  return (
    <>
    <Header />
    <MainContainer/>
    <Footer />

    </>
  )
}

export default App
