import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={ProductList}></Route>
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
