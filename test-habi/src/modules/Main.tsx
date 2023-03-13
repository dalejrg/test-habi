import useNavigation from "../hooks/useNavigation";
import Button from "../components/Button/Button";
import Image from "../assets/img/header.png";
import "../styles/Main.css";

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

const Main = ({step}: Props) => {
  const { handleNavigate } = useNavigation();

  return (
    <div>
      <div className="contentMessage">
        <div className="txtMessage">
          <div>
            <h3>Llegaste al lugar que estabas buscando</h3>
          </div>
          <div>
            <h1>Compramos tu vivienda en 10 días*</h1>
            <p>
              {step?.component === "Main" ? step.description : null}
            </p>
          </div>
        </div>
        <img src={Image} alt="headerhabi" className="imgHeader" />
      </div>
      <div className="contentBtn">
        <Button onClick={() => handleNavigate(step?.component === "Main" ? step.linkTo : "")} children="Iniciar" />
      </div>
    </div>
  );
};

export default Main;
