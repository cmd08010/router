import React, { useState, useEffect } from "react"
import qs from "qs"
import "./App.css"
import { getHash } from "./utils/utils"
import Users from "./components/Users"
import Home from "./components/Home"
import Nav from "./components/Nav"
import axios from "axios"

function App() {
  const [params, setParams] = useState(qs.parse(getHash()))
  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setParams(qs.parse(getHash()))
    })
    setParams(qs.parse(getHash()))
  }, [])

  let [users, setUsers] = useState([])

  const data = axios.get("https://acme-users-api-rev.herokuapp.com/api/users")
  let usersData = data.then(response => {
    let usersDataRespones = response.data.users
  })
  console.log(usersDataResponses)

  return (
    <div className="App">
      <Nav />
      {params.view === undefined && <Home />}
      {params.view === "users" && (
        <Users setUsers={setUsers} usersData={usersData} />
      )}
    </div>
  )
}

export default App
