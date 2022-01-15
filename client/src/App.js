import { useState } from 'react'

import BugList from './components/BugList'
import Navbar from './components/Navbar'
import AddBugForm from './components/AddBugForm'

import { Routes, Route } from 'react-router-dom'

import './App.css'

const App = () => {

  const [bugs, setBugs] = useState([
    {
      id: "1",
      short: "Javascript warnings",
      description: "The project still throws lots of Javascript warnings. Each one of them should be addressed",
      reporter: "Hendrik",
      date: "12/01/2022",
      status: "open",
      assignedTo: "Hendrik",
      severity: "low",
    },
    {
      id: "2",
      short: "Implement forum",
      description: "The forum button still does nothing",
      reporter: "Hendrik",
      date: "12/01/2022",
      status: "closed",
      assignedTo: "Hendrik",
      severity: "medium",
    },
    {
      id: "3",
      short: "Data leak",
      description: "Our whole database is all over the internet. Maybe saving the passwords in clear text was a bad idea after all",
      reporter: "Hendrik",
      date: "12/01/2022",
      status: "in-progress",
      assignedTo: "Hendrik",
      severity: "critical",
    },
  ])

  const [nextId, setNextId] = useState(bugs.length + 1)

  const addBug = (bug) => {
    bug.id = nextId;
    setNextId(nextId + 1);
    setBugs([...bugs, bug]);
  }

  return(
    <div className="container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<BugList bugs={bugs} />} />
          <Route path="/add" element={<AddBugForm addBug={addBug}/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
