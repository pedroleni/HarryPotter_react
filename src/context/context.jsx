import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const HPContext = createContext();

export const HPContextProvider = ({ children }) => {

  const [user, setUser] = useState(undefined);
  const [cards, setCards] = useState([]);

  const getCards = async () => {
    const raw = await axios.get("http://hp-api.herokuapp.com/api/characters");
    setCards(raw.data);
    
    
  };



  const loginUser = () => {
    setUser("Pedro");
  };

  const logoutUser = () => {
    setUser(undefined);
  }
 
  useEffect(() => {
    getCards();
    
  }, []);

  return (
    <HPContext.Provider value={{ cards,user, loginUser, logoutUser }}>
      {children}
    </HPContext.Provider>
  );
};
