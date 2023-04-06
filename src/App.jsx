
import { Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Footer from "./Components/Footer";
import { ContextProvider } from "./Components/utils/global.context";



function App() {
 
 
  return (
       <ContextProvider>
       <Navbar/>
         <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/favs" element={<Favs/>}></Route>
          <Route path="/detail/:id" element={<Detail/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
         </Routes>
        <Footer/>
       </ContextProvider>  
     
  );
}

export default App;
