import { useState } from "react";
import { useDispatch } from "react-redux";
import useNavigation from "../hooks/useNavigation";
import { floorproperty } from "../Actions/actions";
import Stepper from "../components/Stepper/Stepper";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import "../styles/Name.css";
import Summary from "../components/Summary/Summary";
import ButtonSummary from "../components/Button/ButtonSummary";
import Modal from "../components/Modal/Modal";

interface Steps {
  step: number;
  path: string;
  component: string;
  description: string;
  linkTo: string;
}

interface Props {
  step: Steps;
}

const FloorProperty = ({step}: Props) => {
  const dispatch = useDispatch();
  const { handleNavigate } = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const [floorProperty, setFloorProperty] = useState("");

  const handleUpdateFloorProperty = (e: any) => {
    setFloorProperty(e.target.value);
  };
  const handleContinueForm = () => {
    if (handleValidate()) {
      dispatch(floorproperty(floorProperty));
      handleNavigate(step.component === "FloorProperty" ? step.linkTo : "");
    }
  };
  const handleValidate = () => {
    const number = parseInt(floorProperty)
    if(number >=1 && number <= 50){
      return true
    }else{
      setIsRequired(true);
      return false
    }
  };
  return (
    <>
    <div className="stepMobile">
    {showModal && 
            <Modal setShowModal={setShowModal} />
        }
        <h1>Paso 4 de 5: Número de piso</h1>
    </div>
    <h1 className="description">{step?.component === "FloorProperty" ? step.description : null}</h1>
      <div className="stepperContent">
        <Stepper />
      </div>
    <div className="contentNameInfo">
      <div className="formName">
        <Input
            label="Número de piso"
            onChange={handleUpdateFloorProperty}
            id="floor"
            placeholder="Ingresa el número de piso de tu inmueble"
        />
        {isRequired && <span className="txtValidate">Debes ingresar un piso menor a 50</span>}
        <div className="btnSummary">
            <ButtonSummary children="Ver Resumen" onClick={() => setShowModal(true)}/>
        </div>
        <div className="btnNext">
            <Button children="Siguiente" onClick={handleContinueForm} />
        </div>
      </div>
      <div className="summaryInfo">
        <Summary />
      </div>
    </div>
    </>
  );
};

export default FloorProperty;
