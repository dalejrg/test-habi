import { useSelector } from "react-redux";
import '../../styles/Stepper.css';

const Stepper = () => {
  const todo: any = useSelector((state) => state);
  return (
    <div>
      <div className="content">
        <ol className="list">
          <li
            className={
              todo.fullname === ""
                ? "stepperItem"
                : "selStepperItem"
            }
          >
            <p className="txtStepper">Nombre completo</p>
          </li>
          <li
            className={
              todo.email === "" ? "stepperItem" : "selStepperItem"
            }
          >
            <p className="txtStepper">Correo electrónico</p>
          </li>
          <li
            className={
              todo.addressproperty === ""
                ? "stepperItem"
                : "selStepperItem"
            }
          >
            <p className="txtStepper">Dirección del inmueble</p>
          </li>
          <li
            className={
              todo.floorproperty === ""
                ? "stepperItem"
                : "selStepperItem"
            }
          >
            <p className="txtStepper">Número de piso</p>
          </li>
          <li
            className={
              todo.bbqzone === "" || todo.comunityhall === "" || todo.childrenspark === ""
                ? "stepperItem"
                : "selStepperItem"
            }
          >
            <p className="txtStepper">Zonas sociales</p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Stepper;
