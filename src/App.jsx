import { Outlet } from "react-router-dom"
import Menu from "./components/menu/Menu"
import { Navigate } from "react-router-dom";
function App() {

  // sino tengo el token tokenEDmarket lleva al login
  if (!localStorage.getItem("tokenEDmarket")) return <Navigate to="/login"/>

  return (
    <>
            <Menu />
            <Outlet />
        </>
  )
}

export default App