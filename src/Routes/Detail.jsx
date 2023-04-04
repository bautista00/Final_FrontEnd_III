import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [user,setUser] = useState({})
  const {id} = useParams()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  // Aquí podrías hacer una llamada a una API para obtener la información del dentista

  const URL='https://jsonplaceholder.typicode.com/users/'
  
  useEffect(()=>{
  
  async function fetchDataAsync(){
    const response = await fetch(URL+ id);
    const data = await response.json();
    setUser(data);
  }
  fetchDataAsync();
  
  }, [id]);
  
  return (
    <>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    <h1>Detail Dentist {id}  </h1>
    <ul>
        <li>Nombre: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Teléfono: {user.phone}</li>
        <li>Sitio web: {user.website}</li>
      </ul>
      
    </>
  )
}

export default Detail