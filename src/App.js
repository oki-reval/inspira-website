import logo from './logo.svg';
import './App.css';
import ContainerLayout from './components/ContainerLayout';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <ContainerLayout>
        <Routes> {/* Menggunakan Routes untuk menampung route */}
          <Route path="/" element={<Home />} /> {/* Menggunakan element dengan JSX */}
          <Route path="/profile" element={<Profile />} /> {/* Menggunakan element dengan JSX */}
        </Routes>
      </ContainerLayout>
    </Router>
  );
}

export default App;
