import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Details } from './pages/Details';
import { List } from './pages/List';
import { Demo } from './pages/Demo';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/demo/:id" element={<Demo />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}
