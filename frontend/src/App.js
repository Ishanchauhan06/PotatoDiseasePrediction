
import React from 'react'
import Navbar from './components/Header/navbar'
// import { Routes, Route, Router } from 'react-router-dom'
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import { ImageUpload } from "./pages/home";
import Cure from "./pages/Cure"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element ={<ImageUpload />} />
        <Route path="/cure" element={<Cure />} />
        
      </Routes>
    </Router>
  )
}
export default App