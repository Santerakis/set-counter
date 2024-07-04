import React, { ChangeEvent } from "react";
import s from "./Settings.module.css";
import { SuperButton } from "./SuperButton";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "./redux/store";
import {
  changeMaxValueAC,
  isDisplaySettingMessageAC,
  SettingsStateType,
} from "./redux/settings-reducer";
import { setStartValueAC } from "./redux/counter-reducer";

type SettingsPropsType = {
  error: boolean;
};

export const Settings = (props: SettingsPropsType) => {
  const settingsState = useSelector<AppRootStateType, SettingsStateType>(
    (state) => state.settings,
  );
  const dispatch = useDispatch();

  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeMaxValueAC(e.currentTarget.valueAsNumber));
  };
  const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setStartValueAC(e.currentTarget.valueAsNumber));
  };
  const onFocusHandler = () => {
    dispatch(isDisplaySettingMessageAC(true));
  };
  const onPressSetHandler = () => {
    dispatch(isDisplaySettingMessageAC(false));
    dispatch(setStartValueAC(settingsState.startNum));
  };

  let finalInputClassName = `${s.settings_input} ${props.error ? s.error_input : ""}`;

  return (
    <>
      <div onFocus={onFocusHandler} className={s.settings_block}>
        <div className={s.input_block}>
          Max value
          <input
            value={settingsState.maxNum}
            onChange={onChangeMaxValue}
            className={finalInputClassName}
            type="number"
          />
        </div>
        <div className={s.input_block}>
          Start value
          <input
            value={settingsState.startNum}
            onChange={onChangeStartValue}
            className={finalInputClassName}
            type="number"
          />
        </div>
      </div>
      <div className={s.settings_btn_wrapper}>
        <SuperButton
          name={"Set"}
          callback={onPressSetHandler}
          disabled={!settingsState.isEditMode || props.error}
        />
      </div>
    </>
  );
};

export const SettingsContainer = React.memo(Settings);
