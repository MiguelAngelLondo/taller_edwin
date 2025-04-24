import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './Layaout/Header/header'
import { MainContainer } from './Layaout/MainContainer/MainContainer'
import { Footer } from './Layaout/Footer/Footer'
import './App.css'

function App() {
  const [search, setSearch] = useState('')

  return (
    <div className="app-container">
      <Header search={search} setSearch={setSearch} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<MainContainer search={search} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
