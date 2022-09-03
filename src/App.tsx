import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LayoutComponent } from './components';
import { HomePage, FavoritesPage, HistoryPage } from './pages';

export const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </LayoutComponent>
    </Router>
  );
};
