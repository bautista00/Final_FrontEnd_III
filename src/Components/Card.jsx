
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';



const Card = ({ name, username, id , show , eliminarCard}) => {
  const navigate = useNavigate()
 
  const addFav = ()=>{
  
  const cardsGuardadas= JSON.parse(localStorage.getItem('DentistFav') || '[]')
  const cardYaGuardadas = cardsGuardadas.some((card) => 
  card.id === id)

  if(!cardYaGuardadas){
    const cardNueva = [...cardsGuardadas, {name, username, id, show}];
    localStorage.setItem('DentistFav', JSON.stringify(cardNueva))
    alert("Dentista agregado a favoritos")
  }else{
    alert("Este dentista ya esta en favoritos ")
  }
  navigate('/favs')
}

const eliminar = () => {
  eliminarCard(id)
  alert('Dentista eliminado de favoritos')
}

  return (
     <div className="card">
      
        <Link to={"/detail/"+id}>
        <img src="./images/doctor.jpg" alt="Doctor img" />
        <h2>{name}</h2>
        <p>{username}</p>
        </Link>
        {eliminarCard ? (
        <button onClick={eliminar} className="favButton eliminarButton">
          🗑️
        </button>
      ) : (
        <button onClick={addFav} className="favButton">
          ⭐
        </button>
      )}
    </div>
  );
};

export default Card;
