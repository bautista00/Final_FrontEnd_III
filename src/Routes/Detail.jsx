import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [user, setUser] = useState({})
  const { id } = useParams()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  // Aquí podrías hacer una llamada a una API para obtener la información del dentista

  const URL = 'https://jsonplaceholder.typicode.com/users/'

  useEffect(() => {

    async function fetchDataAsync() {
      const response = await fetch(URL + id);
      const data = await response.json();
      setUser(data);
    }
    fetchDataAsync();

  }, [id]);
  
  const { Theme } = useContext(ContextGlobal)
  return (
    <div className='detail' style={{ background: Theme.backgroundHome, color: Theme.color }}>

      <h1>Detalles del dentista {id}  </h1>
      <table>
        <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
        </thead>
        <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail