import React, { ReactNode } from "react";
import s from "./Counter.module.css";

type CounterPropsType = {
  count: number | boolean;
  maxNum: number;
  displayMessage: string;
  children: ReactNode;
  error: boolean;
};

export const Counter: React.FC<CounterPropsType> = ({
  count,
  maxNum,
  displayMessage,
  children,
  error,
}) => {
  const finalCountClassName = `${s.counter_default} 
    ${(count === maxNum && children !== displayMessage) || error ? s.counter_title : ""}`;

  return (
    <div className={s.counter}>
      <p className={finalCountClassName}>{children}</p>
    </div>
  );
};
