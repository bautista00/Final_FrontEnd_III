import React,{useContext, useState} from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { useNavigate } from "react-router-dom";




const Favs = () => {
  const navigate = useNavigate()

  let cardsGuardadas = localStorage.getItem('DentistFav') || '[]';
  const [user, setUser] = useState({})
  const {Theme} = useContext(ContextGlobal)

  if(cardsGuardadas === []){
    cardsGuardadas = [user, setUser]
  }
  else{
    let parsedFavs = JSON.parse(cardsGuardadas)
    cardsGuardadas = parsedFavs
  }

  const eliminarCard = (id) => {
    const cardsGuardadas = JSON.parse(localStorage.getItem('DentistFav') || '[]')
    const nuevasCards = cardsGuardadas.filter((card) => card.id !== id)
    localStorage.setItem('DentistFav', JSON.stringify(nuevasCards))
    navigate('/home')
  }

  localStorage.setItem('DentistFav', JSON.stringify(cardsGuardadas))
  
  return (
    <div className="favs" style={{background:Theme.backgroundHome, color:Theme.color}}>
      <h1>Dentistas favoritos</h1>
      <div className="card-grid">
        
      {cardsGuardadas.map(item => 
        {return <Card 
        key={item.id} 
        id={item.id} 
        name={item.name} 
        username={item.username} 
        eliminarCard={eliminarCard}
        />})}
       
      </div>
    </div>
  );
};

export default Favs;
