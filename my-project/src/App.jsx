import { createContext } from "react";
import Card from "./Component/Card/Card";
import GetData from "./Component/GetData/GetData";
import Users from "./Component/GetData/Users";
import Form from "./TwoWayBinding/form"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const userContext = createContext()
function App() {

  
  const info = {
    name : "hasibur Rahman Safin",
    age : 22,
    university :  "Brac University"
  }


  

  return (
    <userContext.Provider value={info}>
      {/* <Form /> */}
      <Users name="Hasibur Rahman Safin" />
    </userContext.Provider>
  )
}

export default App
