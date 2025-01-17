import Card from "./Component/Card/Card";
import GetData from "./Component/GetData/GetData";
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
      <GetData name="Hasibur Rahman Safin" />
    </>
  )
}

export default App
