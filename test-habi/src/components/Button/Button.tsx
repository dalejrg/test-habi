import React from 'react';
import '../../styles/Button.css';

export type ButtonProps = {
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  children: string;
}

const Button = ({onClick, children}: ButtonProps): JSX.Element => {
  return (
    <button
        className="btn-main"
        onClick={onClick}
      >
        {children}
    </button>
  )
}

export default Button;