import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className='container'>
        <Router>
          <Routes>
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/" element={<h1>Página Inicial</h1>} />
          </Routes>
        </Router>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;