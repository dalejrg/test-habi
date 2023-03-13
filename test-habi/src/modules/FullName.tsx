import { useState } from "react";
import { useDispatch } from "react-redux";
import useNavigation from "../hooks/useNavigation";
import { fullname } from "../Actions/actions";
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

const FullName = ({step}: Props) => {
  const dispatch = useDispatch();
  const { handleNavigate } = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const [fullName, setFullName] = useState("");

  const handleUpdateFullName = (e: any) => {
    setFullName(e.target.value);
  };
  const handleContinueForm = () => {
    if (handleValidate()) {
      dispatch(fullname(fullName));
      handleNavigate(step?.component === "FullName" ? step.linkTo : "");
    }
  };
  const handleValidate = () => {
    if (fullName !== "") {
      return true;
    } else {
      setIsRequired(true);
      return false;
    }
  };
  return (
    <>
    <div className="stepMobile">
    {showModal && 
            <Modal setShowModal={setShowModal} />
          }
        <h1>Paso 1 de 5: Nombre completo</h1>
    </div>
          <h1 className="description">{step?.component === "FullName" ? step.description : null}</h1>
      <div className="stepperContent">
        <Stepper />
      </div>
    <div className="contentNameInfo">
      <div className="formName">
        <Input
            label="Nombre completo"
            onChange={handleUpdateFullName}
            id="name"
            placeholder="Ingresa tu nombre completo"
        />
        {isRequired && <span className="txtValidate">Debes ingresar tu nombre en este campo</span>}
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

export default FullName;
