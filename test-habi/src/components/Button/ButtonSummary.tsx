import React from 'react';
import '../../styles/Button.css';

export type ButtonSummaryProps = {
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  children: string;
}

const ButtonSummary = ({onClick, children}: ButtonSummaryProps): JSX.Element => {
  return (
    <button
        className="btn-main-summary"
        onClick={onClick}
      >
        {children}
    </button>
  )
}

export default ButtonSummary;