import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import InsertEmployeeComponent from './components/InsertEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className='container'>
        <Router>
          <Routes>
            <Route exact path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee" element={<InsertEmployeeComponent />} />
          </Routes>
        </Router>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;