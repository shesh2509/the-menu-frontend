//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import Homescreen from './screens/Homescreen';
import CartScreen from './screens/CartScreen';
import RegisterScreen from './screens/RegisterScreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen/>}/>
          <Route path="/cart" element={<CartScreen/>}/>
          <Route path="/register" element={<RegisterScreen/>}/>
          <Route path="/login" element={<Loginscreen/>}/>
          <Route path="/orders" element={<Ordersscreen/>}/>
        </Routes>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
