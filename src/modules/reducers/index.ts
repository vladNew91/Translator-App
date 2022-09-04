import { ChangeThemeActions } from "../actions";
import { CHANGE_THEME } from "../constants";

export interface TranslateState {
  lightTheme: boolean,
}

const initialState: TranslateState = {
  lightTheme: true,
};

export const translateReducer = (state = initialState, action: ChangeThemeActions) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        lightTheme: !state.lightTheme,
      }
    default:
      return state;
  }
};
