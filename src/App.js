import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Routes, Route} from "react-router-dom";
import Landing from './components/landing';
import SelectCarMenu from './components/SearchCar/SelectCar';
import Login from './components/login';
import Register from './components/Register/Register'
import './App.css'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/cariMobil' element={<SelectCarMenu/>} /> 
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    
    </div>
  );
}

export default App;
