type ActionsType =
  | ReturnType<typeof incrementAC>
  | ReturnType<typeof setStartValueAC>;

export type CounterStateType = {
  count: number;
};

const initialState: CounterStateType = {
  count: 0,
};

export const counterReducer = (
  state: CounterStateType = initialState,
  action: ActionsType,
): CounterStateType => {
  switch (action.type) {
    case INCREMENT:
      return state.count < action.payload.maxNum
        ? { ...state, count: (state.count += 1) }
        : { ...state };
    case SET_START_VALUE:
      return { ...state, count: action.payload.startValue };
    default:
      return state;
  }
};

const INCREMENT = "INCREMENT";
export const SET_START_VALUE = "SET_START_VALUE";

export const incrementAC = (maxNum: number) => {
  return {
    type: INCREMENT,
    payload: {
      maxNum,
    },
  } as const;
};

export const setStartValueAC = (startValue: number) => {
  return {
    type: SET_START_VALUE,
    payload: {
      startValue,
    },
  } as const;
};
