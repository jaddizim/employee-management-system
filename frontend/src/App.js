import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import InsertEmployeeComponent from './components/InsertEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className='bg-white vh-100'>
      <HeaderComponent />
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee" element={<InsertEmployeeComponent />} />
            <Route path="/edit-employee/:id" element={<InsertEmployeeComponent />} />
          </Routes>
        </Router>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;