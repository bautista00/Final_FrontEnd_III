import React, {useContext, useEffect, useState}from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

const[userList, setUserList]= useState([])
const show= true;
const { Theme } = useContext(ContextGlobal)
const URL='https://jsonplaceholder.typicode.com/users'

useEffect(()=>{

async function fetchDataAsync(){
  const respuesta = await fetch(URL);
  const data = await respuesta.json();
  setUserList(data);
}
fetchDataAsync();

}, []);

  return (
    <main className='home' style={{background:Theme.backgroundHome, color:Theme.color}} >
      <h1>Home</h1>
      <div className='card-grid'>
        {userList.map((user) =>{
          return(
                <Card key={user.id} name={user.name} username={user.username} id={user.id} show={show}/>
          )})}
      </div>
    </main>
  )
}

export default Home