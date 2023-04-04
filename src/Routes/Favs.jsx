import React,{useState} from "react";
import Card from "../Components/Card";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  let cardsGuardadas = localStorage.getItem('DentistFav') || '[]';
  const [user, setUser] = useState({})

  if(cardsGuardadas === []){
    cardsGuardadas = [user, setUser]
  }else{
    let parsedFavs = JSON.parse(cardsGuardadas)
    cardsGuardadas = parsedFavs
  }
  localStorage.setItem('DentistFav', JSON.stringify(cardsGuardadas))
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">

      {cardsGuardadas.map(item => 
        {return <Card key={item.id} id={item.id} name={item.name} username={item.username}/>})}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
