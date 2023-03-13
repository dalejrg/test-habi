import { useState } from "react";
import { useDispatch } from "react-redux";
import useNavigation from "../hooks/useNavigation";
import { email } from "../Actions/actions";
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

const Email = ({step}: Props) => {
  const dispatch = useDispatch();
  const { handleNavigate } = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const [emailClient, setEmailClient] = useState("");

  const handleUpdateEmail = (e: any) => {
    setEmailClient(e.target.value);
  };
  const handleContinueForm = () => {
    if (handleValidate()) {
      dispatch(email(emailClient));
      handleNavigate(step?.component === "Email" ? step.linkTo : "");
    }
  };
  const handleValidate = () => {
    if (emailClient !== "") {
      if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(emailClient)) {
        return true;
      } else {
        setIsRequired(true);
      }
    } else {
      setIsRequired(true);
      return false;
    }
  };
  return (
    <>
      <div className="stepMobile">
        {showModal && <Modal setShowModal={setShowModal} />}
        <h1>Paso 2 de 5: Correo electrónico</h1>
      </div>
        <h1 className="description">{step?.component === "Email" ? step.description : null}</h1>
      <div className="stepperContent">
        <Stepper />
      </div>
      <div className="contentNameInfo">
        <div className="formName">
          <Input
            label="Correo electrónico"
            onChange={handleUpdateEmail}
            id="email"
            placeholder="Ingresa tu correo electrónico"
          />
          {isRequired && (
            <span className="txtValidate">
              Debes ingresar un correo electrónico valido
            </span>
          )}
          <div className="btnSummary">
            <ButtonSummary
              children="Ver Resumen"
              onClick={() => setShowModal(true)}
            />
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

export default Email;
