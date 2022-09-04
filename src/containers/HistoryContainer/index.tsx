import * as React from 'react';
import { useSelector } from "react-redux";
import { TableComponent } from '../../components';
import { selectThemeData } from '../../modules';

export const HistoryContainer: React.FC = (): JSX.Element => {
    const history = JSON.parse(localStorage.getItem('history') || "{}").history;

    const lightTheme: boolean = useSelector(selectThemeData);

    return (
        <TableComponent data={history} lightTheme={lightTheme} />
    );
};
