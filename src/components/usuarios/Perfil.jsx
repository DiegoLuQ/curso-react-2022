
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const Perfil = () => {

  const usuario = useContext(UserContext)
  return (
    <div>
      <h1>Perfil de {usuario.name}</h1>
      <span>Usuario desde: {usuario.registered}</span>
    </div>
  );
}

export default Perfil;
