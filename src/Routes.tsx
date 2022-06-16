import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Details } from './pages/Details';
import { List } from './pages/List';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}
