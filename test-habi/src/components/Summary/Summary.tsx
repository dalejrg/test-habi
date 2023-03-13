import { useSelector } from "react-redux";
import "../../styles/Summary.css";

const Summary = () => {
    const todo:any = useSelector((state)=>state);
  return (
    <div className="contentSummary">
      <h2>Habi Resumen</h2>
      <h3>Nombre Completo</h3>
      <p>{todo.fullname}</p>

      <h3>Correo electrónico</h3>
      <p>{todo.email}</p>
      <h3>Dirección del inmueble</h3>
      <p>{todo.addressproperty}</p>

      <h3>Piso del inmueble</h3>
      <p>{todo.floorproperty}</p>

      <h3>Zonas sociales:</h3>

      <p>
        {todo.bbqzone}
        {todo.childrenspark}
        {todo.comunityhall}
      </p>
    </div>
  );
};
export default Summary;