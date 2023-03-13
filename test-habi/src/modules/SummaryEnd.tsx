import Button from "../components/Button/Button";
import Summary from "../components/Summary/Summary";
import useNavigation from "../hooks/useNavigation";
import "../styles/SummaryEnd.css";

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

const SummaryEnd = ({step}: Props) => {
  const { handleNavigate } = useNavigation();
  return (
    <div className="summary-end">
      <h1 className="description">{step?.component === "SummaryEnd" ? step.description : null}</h1>
      <div className="txtSummary">
        <h2>
          Haz finalizado con éxito el registro de tu inmueble, en unos días uno
          de nuestros expertos se comunicará contigo. Te dejamos el resumen de
          tu registro.
        </h2>
      </div>
      <div className="summaryContent">
        <Summary />
      </div>
      <div className="btnFinish">
      <Button children='Salir'  onClick={() => handleNavigate(step.component === "SummaryEnd" ? step.linkTo : "")}/>
      </div>
    </div>
  );
};

export default SummaryEnd;
