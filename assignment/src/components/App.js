import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Login from "../components/login";
import SignInSide from "../components/login/SignInSide";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={SignInSide}></Route>
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
