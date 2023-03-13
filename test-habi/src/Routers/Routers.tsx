
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import {stepsData} from "../steps";
import MainLayout from "../modules/MainLayout";
import logo from '../logo.svg';

interface Steps {
  step: number,
  path: string,
  component: string
  description: string,
  linkTo: string
}

export const AppRouters = () => {
  const [currentData] = useState(stepsData());

  return (
    <BrowserRouter>
    <img src={logo} alt="habilogo" height="60px" width="60px" />
      <Routes>
        {
          currentData.steps.map((step: Steps, index: number) => 
            <Route 
              key = {step.component + index}
              path={step.path}
              element = {
                <MainLayout step={step} />
              }
            />
          )
        }
      </Routes>
    </BrowserRouter>
    )
};
