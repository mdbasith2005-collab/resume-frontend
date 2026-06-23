import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LandingPage from './pages/LandingPage';
import BuilderPage from './pages/BuilderPage';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path="home" element={<LandingPage />} />
        <Route path="builder" element={<BuilderPage />} />
      </Route>
    </Routes>
  );
}

export default App;
