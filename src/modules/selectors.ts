import { AppState } from './';

export const selectThemeData = (state: AppState): boolean => state.translate.lightTheme;
