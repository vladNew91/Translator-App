import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from '../../modules';
import { SwitcherComponent } from "../../components";

export const SwitcherContainer: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleChangeTheme = useCallback(() => dispatch(changeTheme()), [dispatch]);

  return <SwitcherComponent onClick={handleChangeTheme} />
};
