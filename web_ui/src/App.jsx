import { useState,React } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './assets/Components/Login'
import Home from './assets/Components/Home'
import Project from './assets/Components/Project'
function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
        <Routes>

          <Route path='/'element={<Login/>} />
          <Route path='/login'element={<Login/>} />
          <Route path='/signup'element={<Login/>} />
          <Route path='/home'element={<Home/>} />
          <Route path='/project'element={<Project/>} />
        </Routes>
      </Router>
      
    
  )
}

export default App
