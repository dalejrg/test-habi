import { useSelector } from "react-redux";
import "../../styles/Modal.css";
import ButtonSummary from "../Button/ButtonSummary";

const Modal = ({...props}) => {
  const todo: any = useSelector((state) => state);
  const { setShowModal } = props;
  return (
    <div className="modalSummary">
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
      <div className="btnModalSummary">
      <ButtonSummary children={"Ocultar Resumen"} onClick={() => setShowModal(false)} />
      </div>
    </div>
  );
};

export default Modal;
