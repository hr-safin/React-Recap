import Card from "./Component/Card/Card";
import GetData from "./Component/GetData/GetData";
import Users from "./Component/GetData/Users";
import Form from "./TwoWayBinding/form"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  // const router = new createBrowserRouter([
  //   {
  //     path : "/",

  //   }
  // ])
  

  return (
    <>
      {/* <Form /> */}
      <Users name="Hasibur Rahman Safin" />
    </>
  )
}

export default App
