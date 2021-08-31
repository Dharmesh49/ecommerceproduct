import logo from './logo.svg';
import './App.css';

import Header from './Component/HeaderComponent/Header';
import Login from './Component/LoginComponent/Login';
import Register from './Component/RegisterComponent/Register';
import UpdateProduct from './Component/Product/UpdateProduct/UpdateProduct';
import AddProduct from './Component/Product/AddProduct/AddProduct';

import { BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/update">
          <UpdateProduct />
        </Route>
        <Route path="/home">
          <AddProduct />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
