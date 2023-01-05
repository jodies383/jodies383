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
    // <div className="App">
    //   <h1>Jodie Solomons</h1>
    //   <a href="http://">Home</a>
    //   <a href="http://">About</a>
    //   <a href="http://">Projects</a>
    //   <a href="http://">Contact</a>
    //   <div>
    //     <img src="/src/assets/img.jpeg" className="logo react" alt="React logo" />
    //   </div>
    //   <div className="card">

    //     <p>
    //       Hi! I'm Jodie, a 23 year old software developer from Cape Town
    //     </p>
    //   </div>
    // </div>
    <MainProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jodies383/Projects" element={<Projects />} />
          <Route path="/jodies383/Contact" element={<Contact />} />
          {/* <Route path="/my-favourite-movies/Signup" element={<SignUp />} />
        <Route path="/my-favourite-movies/Home" element={<Home />} />
        <Route path="/my-favourite-movies/Favourites" element={<Favourites />} />
        <Route path="/my-favourite-movies/AddToFavsModal" element={<AddToFavsModal />} /> */}
        </Routes>
      </Router>
    </MainProvider>
  )
}

export default App
