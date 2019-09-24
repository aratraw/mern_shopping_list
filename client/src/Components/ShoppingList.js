import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";

import ShopListItem from "./ShopListItem";
import { inject, observer } from "mobx-react";
class ShoppingList extends Component {
  static propTypes = {
    //from
    //from accordion
  };
  state = {};

  componentDidMount() {
    this.props.ItemStore.fetchItems();
  }

  render() {
    const { items, ItemStore } = this.props;
    const { deleteItem } = ItemStore;
    return (
      <Container>
        <ListGroup>
          {items.map(item => (
            <ListGroupItem key={item._id}>
              <ShopListItem item={item} handleDelete={deleteItem} />
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}
export default inject("ItemStore")(observer(ShoppingList));
