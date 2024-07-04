import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Counter } from "../components/Counter/Counter";
import { SuperButton } from "../components/SuperButton/SuperButton";
import { SettingsContainer } from "../components/Settings/Settings";
import {
  CounterStateType,
  incrementAC,
  setStartValueAC,
} from "./counter-reducer";
import { AppRootStateType } from "./store";
import { SettingsStateType } from "./settings-reducer";

function App() {
  const settingsState = useSelector<AppRootStateType, SettingsStateType>(
    (state) => state.settings,
  );
  const counterState = useSelector<AppRootStateType, CounterStateType>(
    (state) => state.counter,
  );
  const dispatch = useDispatch();

  const error =
    settingsState.startNum >= settingsState.maxNum ||
    settingsState.startNum < 0 ||
    settingsState.maxNum < 0;

  const userMessage = settingsState.isEditMode
    ? `Enter values and press 'set'`
    : "";
  const increment = () => {
    dispatch(incrementAC(settingsState.maxNum));
  };
  const reset = () => {
    dispatch(setStartValueAC(settingsState.startNum));
  };

  return (
    <div className="App">
      <div className={"Counter_wrapper"}>
        <Counter
          error={error}
          count={counterState.count}
          maxNum={settingsState.maxNum}
          displayMessage={userMessage}
        >
          {error
            ? "Incorrect value"
            : settingsState.isEditMode
              ? userMessage
              : counterState.count}
        </Counter>
        <div className={"Counter_btn_wrapper"}>
          <SuperButton
            disabled={
              counterState.count === settingsState.maxNum || !!userMessage
            }
            name={"Increment"}
            callback={increment}
          />
          <SuperButton
            disabled={
              counterState.count === settingsState.startNum || !!userMessage
            }
            name={"Reset"}
            callback={reset}
          />
        </div>
      </div>
      <div className={"Settings_wrapper"}>
        <SettingsContainer error={error} />
      </div>
    </div>
  );
}

export default App;
