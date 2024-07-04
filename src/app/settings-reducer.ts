import { SET_START_VALUE, setStartValueAC } from "./counter-reducer";

type ActionsType =
  | ReturnType<typeof changeMaxValueAC>
  | ReturnType<typeof isDisplaySettingMessageAC>
  | ReturnType<typeof setStartValueAC>;

export type SettingsStateType = {
  maxNum: number;
  startNum: number;
  isEditMode: boolean;
};

const initialState: SettingsStateType = {
  maxNum: 5,
  startNum: 0,
  isEditMode: false,
};
export const settingsReducer = (
  state: SettingsStateType = initialState,
  action: ActionsType,
): SettingsStateType => {
  switch (action.type) {
    case CHANGE_MAX_VALUE:
      return { ...state, maxNum: action.payload.maxValue };
    case SET_START_VALUE:
      return { ...state, startNum: action.payload.startValue };
    case IS_DISPLAY_SETTING_MESSAGE:
      return { ...state, isEditMode: action.payload.isDisplay };
    default:
      return state;
  }
};

const CHANGE_MAX_VALUE = "CHANGE_MAX_VALUE";
const IS_DISPLAY_SETTING_MESSAGE = "IS_DISPLAY_SETTING_MESSAGE";

export const changeMaxValueAC = (maxValue: number) => {
  return {
    type: CHANGE_MAX_VALUE,
    payload: {
      maxValue,
    },
  } as const;
};

export const isDisplaySettingMessageAC = (isDisplay: boolean) => {
  return {
    type: IS_DISPLAY_SETTING_MESSAGE,
    payload: {
      isDisplay,
    },
  } as const;
};
