import './App.css';

import Login from './Component/LoginComponent/Login';
import Register from './Component/RegisterComponent/Register';
import UpdateProduct from './Component/Product/UpdateProduct/UpdateProduct';
import AddProduct from './Component/Product/AddProduct/AddProduct';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Protected from './Component/ProtectedComponent/Protected';
import ProductList from './Component/ProductList/ProductList';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/update/:id">
            <Protected Cmp={UpdateProduct} />
            {/* <UpdateProduct />*/}
          </Route>
          <Route path="/home">
            <Protected Cmp={AddProduct} />
            {/*<AddProduct />*/}
          </Route>
          <Route exact path="/">
            <Protected Cmp={ProductList} />
            {/* <Product List />*/}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
