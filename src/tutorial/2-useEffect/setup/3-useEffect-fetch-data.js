import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)
  }  
  useEffect(() => {
    getUsers()
  }, [])

  const handleRemove =(id)=>{
   let newUsers =  users.filter(user=> user.id !== id)
   setUsers(newUsers)
  }
  return <>
    <h3>Github Users</h3>
    <ul className="users">
    {users.map((user, index)=>{
      const {id, avatar_url, html_url, login} = user
      return <li key={id}>
         <img src={avatar_url} alt={login}/>
         <div>
         <h4>{login}</h4>
         <a href={html_url}>Profile</a>
         </div>
         <button className="btn" onClick={()=>handleRemove(id)}>remove</button>
      </li>
      
    })}
    </ul>
  </>

};

export default UseEffectFetchData;
     