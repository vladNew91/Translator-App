import { Action } from 'redux';
import { CHANGE_THEME } from '../constants';

export interface ChangeTheme extends Action {
  type: typeof CHANGE_THEME;
}

export type ChangeThemeActions = ChangeTheme;

export const changeTheme = (): ChangeThemeActions => ({
  type: CHANGE_THEME,
});
