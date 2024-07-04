import React from "react";
import s from "./SuperButton.module.css";

type SuperButtonPropsType = {
  name: string;
  callback: () => void;
  disabled: boolean;
};

export const SuperButton: React.FC<SuperButtonPropsType> = ({
  name,
  callback,
  disabled,
}) => {
  const finalBtnClassName = `${s.button} ${disabled ? s.disabled : ""}`;

  return (
    <button
      disabled={disabled}
      className={finalBtnClassName}
      onClick={() => callback()}
    >
      {name}
    </button>
  );
};
