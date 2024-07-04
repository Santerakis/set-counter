import { combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./counter-reducer";
import { settingsReducer } from "./settings-reducer";
import { loadState, saveState } from "../utils/localstorage-util";

const rootReducer = combineReducers({
  counter: counterReducer,
  settings: settingsReducer,
});

export const store = legacy_createStore(rootReducer, loadState());

store.subscribe(() => {
  saveState({
    counter: store.getState().counter,
    settings: store.getState().settings,
  });
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
