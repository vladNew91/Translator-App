import * as React from 'react';
import { useSelector } from "react-redux";
import { TableComponent } from '../../components';
import { selectThemeData } from '../../modules';

export const FavoritesContainer: React.FC = (): JSX.Element => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || "{}").favorites;

    const lightTheme: boolean = useSelector(selectThemeData);

    return (
        <TableComponent data={favorites} lightTheme={lightTheme} />
    );
};
