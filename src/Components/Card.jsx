import React from 'react';
import {Link, useNavigate} from 'react-router-dom';




const Card = ({ name, username, id , show}) => {
  const navigate = useNavigate()

  const addFav = ()=>{
  // Aqui iria la logica para agregar la Card en el localStorage
  const cardsGuardadas= JSON.parse(localStorage.getItem('DentistFav') || '[]')
  const cardYaGuardadas = cardsGuardadas.some((card)=> card.id === id)

  if(!cardYaGuardadas){
    const cardNueva = [...cardsGuardadas, {name, username, id, show}];
    localStorage.setItem('DentistFav', JSON.stringify(cardNueva))
    alert("Dentista agregado a favoritos")
  }else{
    alert("Este dentista ya esta en favoritos ")
  }
  navigate('/favs')
}
  return (
     <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={"/detail/"+id}>
        <img src="./images/doctor.jpg" alt="Doctor img" />
        <h2>{name}</h2>
        <p>{username}</p>
        </Link>
    
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
