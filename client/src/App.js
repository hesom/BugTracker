import { useState, useEffect } from 'react'

import BugList from './components/BugList'
import Navbar from './components/Navbar'
import AddBugForm from './components/AddBugForm'
import Bug from './components/Bug'


import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css'

const App = () => {

  const [bugs, setBugs] = useState([])

  useEffect(() => {

    const getData = async () => {
      let data = await fetch('/bugs')
      let bugs = await data.json()
      setBugs(bugs);
    }
    
    getData();

  }, []);

  const addBug = (bug) => {

    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bug),
    };

    const sendToServer = async () => {
      let data = await fetch('/bugs', requestOptions)
      let newBug = await data.json()

      setBugs([...bugs, newBug])
    }

    sendToServer()
  }

  return(
    <div className="container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<BugList bugs={bugs} />} />
          <Route path="/add" element={<AddBugForm addBug={addBug}/>} />
          <Route path="/bugs/:bugId" element={<Bug />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App;