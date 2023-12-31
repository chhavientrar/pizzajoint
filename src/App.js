import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Cards from "./components/Cards";
import Modal from "./components/Model";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showmodel,setshowmodel] = useState(false)

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
<Modal showModal={showmodel} setShowModal={setshowmodel}/>
      <Switch>
        <Route path="/base">
          <Base addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/toppings">
          <Toppings addTopping={addTopping} pizza={pizza} />
        </Route>
        <Route path="/order">
          <Order pizza={pizza} setShowModal={setshowmodel} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Cards/>
    </>
  );
}

export default App;
