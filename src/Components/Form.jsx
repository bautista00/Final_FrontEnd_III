import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState({
   name:"",
   email:"",
  })

  const validarEmail = (email) => {
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(email);
  }

  const [err, setErr] = useState(false)
  
  const handleSubmit = function (e) {
    e.preventDefault();
    if (user.name.length > 5 && validarEmail) {
      setErr(false);
      alert(`Gracias ${user.name}, te contactaremos cuando antes vía mail`);
     
    } 
    else {
      setErr(true);
    }
  }

  return (
    <div>
      
          <form onSubmit={handleSubmit}>
            <label >Name:</label>
            <input type="text" value={user.name} onChange={(event) => { setUser({ ...user, name: event.target.value })}} />
            <label >Email: </label>
            <input type="email" value={user.email} onChange={(event) => { setUser({ ...user, email: event.target.value })}} />
            <button>Enviar</button>
            {err && "Por favor verifique su información nuevamente" }
          </form>
        
    </div>
  );
};

export default Form;
