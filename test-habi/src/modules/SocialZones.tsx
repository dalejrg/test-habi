import { useState } from "react";
import { useDispatch } from "react-redux";
import useNavigation from "../hooks/useNavigation";
import {
  bbqzone,
  childrenspark,
  comunityhall,
} from "../Actions/socialZonesActions";
import Stepper from "../components/Stepper/Stepper";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import "../styles/SocialZones.css";
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

const SocialZones = ({step}: Props) => {
  const { handleNavigate } = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [bbqProperty, setBbqProperty] = useState(false);
  const [childrensParkProperty, setChildrensParkProperty] = useState(false);
  const [comunityHallProperty, setComunityHallProperty] = useState(false);
  const dispatch = useDispatch();
  const handleChangeBbqZone = (e: any) => {
    setBbqProperty(e.target.checked);
};
console.log(bbqProperty)
  const handleChangeChildrensPark = (e: any) => {
    setChildrensParkProperty(e.target.checked);
  };
  const handleChangeComunityHall = (e: any) => {
    setComunityHallProperty(e.target.checked);
  };
  const handleContinueForm = () => {
    dispatch(bbqzone(bbqProperty));
    dispatch(comunityhall(comunityHallProperty));
    dispatch(childrenspark(childrensParkProperty));
    handleNavigate(step.component === "SocialZones" ? step.linkTo : "");
  };
  return (
    <>
      <div className="stepMobile">
        {showModal && <Modal setShowModal={setShowModal} />}
        <h1>Paso 5 de 5: Zonas Sociales</h1>
      </div>
      <h1 className="description">{step?.component === "SocialZones" ? step.description : null}</h1>
      <div className="stepperContent">
        <Stepper />
      </div>
      <div className="contentNameInfo">
        <div className="formName">
          <div className="checkbox">
            <Input
              label="Zona BBQ"
              onChange={handleChangeBbqZone}
              type="checkbox"
              id="bbq-zone"
              checked={bbqProperty}
            />
            <Input
              label="Salón comunal"
              onChange={handleChangeComunityHall}
              type="checkbox"
              id="comunity-hall"
              checked={comunityHallProperty}
            />
            <Input
              label="Parque de juegos"
              onChange={handleChangeChildrensPark}
              type="checkbox"
              id="childrens-park"
              checked={childrensParkProperty}
            />
          </div>
          <div className="btnSummary">
            <ButtonSummary
              children="Ver Resumen"
              onClick={() => setShowModal(true)}
            />
          </div>
          <div className="btnNext">
            <Button children="Finalizar" onClick={() => handleContinueForm()} />
          </div>
        </div>
        <div className="summaryInfo">
          <Summary />
        </div>
      </div>
    </>
  );
};

export default SocialZones;
