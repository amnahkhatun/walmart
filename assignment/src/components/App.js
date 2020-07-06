import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Login from "../components/login";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Login}></Route>
            <Route path="/products/list" component={ProductList}></Route>

            <Route
              path="/products/detail/:productId"
              component={ProductDetail}
            ></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
