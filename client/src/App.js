import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import AppNavbar from "./Components/AppNavbar";
import ShoppingList from "./Components/ShoppingList";
import ItemModal from "./Components/ItemModal";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { inject, observer } from "mobx-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList items={this.props.ItemStore.items} />
        </Container>
      </div>
    );
  }
}

export default inject("ItemStore")(observer(App));
