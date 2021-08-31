import './App.css';

import Login from './Component/LoginComponent/Login';
import Register from './Component/RegisterComponent/Register';
import UpdateProduct from './Component/Product/UpdateProduct/UpdateProduct';
import AddProduct from './Component/Product/AddProduct/AddProduct';
import { BrowserRouter, Route } from 'react-router-dom';
import Protected from './Component/ProtectedComponent/Protected';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/update">
          <Protected Cmp={UpdateProduct} />
          {/* <UpdateProduct />*/}
        </Route>
        <Route path="/home">
          <Protected Cmp={AddProduct} />
          {/*<AddProduct />*/}
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
