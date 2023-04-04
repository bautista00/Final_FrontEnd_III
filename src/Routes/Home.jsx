import React, {useEffect, useState}from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

const[userList, setUserList]= useState([])
const show= true;

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
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {userList.map((user) =>{
          return(
                <Card key={user.id} name={user.name} username={user.username} id={user.id} show={show}/>
          )})
        }
      </div>
    </main>
  )
}

export default Home