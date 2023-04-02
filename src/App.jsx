import React from "react";
import { useState, useEffect } from "react";
import { db } from "./Firebase-config";
import {collection, getDocs} from 'firebase/firestore'
function App(){
  const [users, setUsers] = useState([])
  const getUsersRef = collection(db, "Users")
  useEffect(()=>{
     const getUsers = async()=>{
     const data = await getDocs(getUsersRef)
     setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
     console.log(data)
    };
      getUsers();
    },[])
  return (
    <div>
      {users.map((user)=>{
  return (
    <div>
          {" "}
         <h1>Name: {user.Name}</h1>
         <h1>Age: {user.Age}</h1>
    </div>
  )
      })}
    </div>
  )
}
export default App;