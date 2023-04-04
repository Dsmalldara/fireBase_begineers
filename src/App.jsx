import React from "react";
import { useState, useEffect } from "react";
import { db } from "./Firebase-config";
import {collection, getDocs, addDoc, updateDoc, doc} from 'firebase/firestore'
function App(){
  const [users, setUsers] = useState([])
  const getUsersRef = collection(db, "Users")
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState(0)
  const Update = async ()=>{
    await addDoc ( getUsersRef,{name: userName, age : age})
  };
  const updateAge = async(id, age)=>{
    const userRef = doc (db, "Users", id)
     const addAge = {age : age + 1}
    await updateDoc(userRef, addAge)
  }
  useEffect(()=>{
     const getUsers = async()=>{
     const data = await getDocs(getUsersRef)
     setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
     console.log(data)
    };
      getUsers();
    },[])
  return (
    <div style={{marginLeft:"6rem", marginTop:"10rem"}}>
      <input type="text" placeholder="Input Name" onChange={(event)=>{setUserName(event.target.value)}}/>
      <br></br>
      <input type="number" placeholder="Input Age" onChange={(event)=>{setAge(event.target.value)}}/>
      <button onClick={Update}>Add New profile</button>
      
      {users.map((user)=>{
  return (
    <div>
        
         <h1>Name: {user.name}</h1>
         <h1>Age: {user.age}</h1>
         <button onClick={updateAge(user.id, user.age)}>Increase Age</button>
    </div>
  )
      })}
    </div>
  )
}
export default App;