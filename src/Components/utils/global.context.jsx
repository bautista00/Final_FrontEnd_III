import { createContext } from "react";
import { useState } from "react";

export const initialState = {
   themes: {
          light: {
              backgroundHome:"white",
              backgroundNavbar:"rgb(214, 208, 213)",
              color:"black"
          },
          dark: {
              backgroundNavbar:"rgb(41, 39, 41)",
              backgroundHome:"rgb(146, 146, 146)",
              color:"white"
          }
      },
      favs:setFavsLocalData()
    }


export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  
  const [Theme, setTheme] = useState(initialState.themes.light)
   
  const handleThemeChange = () => {
        if(Theme === initialState.themes.dark) setTheme(initialState.themes.light)
        if(Theme === initialState.themes.light) setTheme(initialState.themes.dark)
      }
      const [Favs, setFavs] = useState(initialState.favs)
  return (

    <ContextGlobal.Provider value={{Theme,handleThemeChange,Favs,setFavs}}>
      {children}
    </ContextGlobal.Provider>

  );
};

function setFavsLocalData (){
  let favs = JSON.parse(localStorage.getItem('DentistFav'))
  return favs != null ? favs: []
}


