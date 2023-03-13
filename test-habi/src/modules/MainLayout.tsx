import AddressProperty from "./AddressProperty";
import Email from "./Email";
import FloorProperty from "./FloorProperty";
import FullName from "./FullName";
import Main from "./Main";
import SocialZones from "./SocialZones";
import SummaryEnd from "./SummaryEnd";

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

const MainLayout = ({ step }: Props) => {
  return (
      <>
      {step.component === "Main" ? <Main step={step} /> : null}
      {step.component === "FullName" ? <FullName step={step} /> : null}
      {step.component === "Email" ? <Email step={step}/> : null}
      {step.component === "AddressProperty" ? <AddressProperty step={step}/> : null}
      {step.component === "FloorProperty" ? <FloorProperty step={step}/> : null}
      {step.component === "SocialZones" ? <SocialZones step={step}/> : null}
      {step.component === "SummaryEnd" ? <SummaryEnd step={step}/> : null}
      </>
  )
};

export default MainLayout;
