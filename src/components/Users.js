import React from "react"
import axios from "axios"

export default function Users({ users, setUsers, usersData }) {
  console.log(users)
  let names = [usersData]
  names.forEach(user => {
    console.log(user)
  })
  return (
    <div>
      Users
      <ul>
        {users.map(user => {
          return <li>{user.fullName}</li>
        })}
      </ul>
    </div>
  )
}
