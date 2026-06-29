import './App.css'
import Header from './component/header.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home.jsx'
import Skill from './Skill.jsx'
import Contact from './Contact.jsx'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
