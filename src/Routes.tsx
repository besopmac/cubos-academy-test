import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import { Details } from './pages/Details';
import { List } from './pages/List';

export function AppRoutes() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}
