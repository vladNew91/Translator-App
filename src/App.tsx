import React from 'react';
import { Provider } from "react-redux";
import { store } from "./modules";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, FavoritesPage, HistoryPage } from './pages';
import { LayoutComponent } from './components';
import './index.css';

export const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Router>
        <LayoutComponent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Routes>
        </LayoutComponent>
      </Router>
    </Provider>
  );
};
