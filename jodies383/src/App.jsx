import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home from './Components/Home'
import Projects from './Components/Projects'
import Contact from './Components/Contact';
import { MainProvider } from './Contexts/MainContext'
import './App.css'

function App() {

  return (
    <MainProvider>
      <Router>
        <Routes>
          <Route path="/jodies383/" element={<Home />} />
          <Route path="/jodies383/Projects" element={<Projects />} />
          <Route path="/jodies383/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </MainProvider>
  )
}

export default App
