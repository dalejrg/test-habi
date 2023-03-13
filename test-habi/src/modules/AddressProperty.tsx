import { useState } from "react";
import { useDispatch } from "react-redux";
import useNavigation from "../hooks/useNavigation";
import { addressproperty } from "../Actions/actions";
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

const AddressProperty = ({ step }: Props) => {
  const dispatch = useDispatch();
  const { handleNavigate } = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const [addressProperty, setAddressProperty] = useState("");

  const handleUpdateAddressProperty = (e: any) => {
    setAddressProperty(e.target.value);
  };
  const handleContinueForm = () => {
    if (handleValidate()) {
      dispatch(addressproperty(addressProperty));
      handleNavigate(step?.component === "AddressProperty" ? step.linkTo : "");
    }
  };
  const handleValidate = () => {
    if (addressProperty.length > 8) {
      return true;
    } else {
      setIsRequired(true);
      return false;
    }
  };
  return (
    <>
      <div className="stepMobile">
        {showModal && <Modal setShowModal={setShowModal} />}
        <h1>Paso 3 de 5: Dirección del inmueble</h1>
      </div>
      <h1 className="description">
        {step?.component === "AddressProperty" ? step.description : null}
      </h1>
      <div className="stepperContent">
        <Stepper />
      </div>
      <div className="contentNameInfo">
        <div className="formName">
          <Input
            label="Dirección"
            onChange={handleUpdateAddressProperty}
            id="address"
            placeholder="Ingresa la dirección de tu inmueble"
          />
          {isRequired && (
            <span className="txtValidate">
              Debes ingresar una dirección valida
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

export default AddressProperty;
