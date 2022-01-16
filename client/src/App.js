import { useState, useEffect } from 'react'

import BugList from './components/BugList'
import Navbar from './components/Navbar'
import AddBugForm from './components/AddBugForm'
import Bug from './components/Bug'


import { Routes, Route } from 'react-router-dom'

import './App.css'

const App = () => {

  const [bugs, setBugs] = useState([
    // {
    //   id: "1",
    //   short: "Javascript warnings",
    //   description: "The project still throws lots of Javascript warnings. Each one of them should be addressed",
    //   reporter: "Hendrik",
    //   date: "12/01/2022",
    //   status: "open",
    //   assignedTo: "Hendrik",
    //   severity: "low",
    // },
    // {
    //   id: "2",
    //   short: "Implement forum",
    //   description: "The forum button still does nothing",
    //   reporter: "Hendrik",
    //   date: "12/01/2022",
    //   status: "closed",
    //   assignedTo: "Hendrik",
    //   severity: "medium",
    // },
    // {
    //   id: "3",
    //   short: "Data leak",
    //   description: "Our whole database is all over the internet. Maybe saving the passwords in clear text was a bad idea after all",
    //   reporter: "Hendrik",
    //   date: "12/01/2022",
    //   status: "in-progress",
    //   assignedTo: "Hendrik",
    //   severity: "critical",
    // },
  ])

  useEffect(() => {

    const getData = async () => {
      let data = await fetch('http://localhost:5000/bugs')
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
      let data = await fetch('http://localhost:5000/bugs', requestOptions)
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
          <Route path="/bugs/:bugId" element={<Bug bugs={bugs}/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App;