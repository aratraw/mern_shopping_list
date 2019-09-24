import React, { Component, PureComponent } from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

/* import './style.css' */

class ShopListItem extends Component {
  static propTypes = {
    //from props
    item: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string
    }),
    handleDelete: PropTypes.func
  };
  /*   onClick={() => {
    console.log("WTF");
    handleDelete(item._id);
  }} */
  render() {
    const { item, handleDelete } = this.props;
    if (!item) return null;
    return (
      <div>
        <Button
          className="remove-btn"
          color="danger"
          size="sm"
          onClick={() => handleDelete(item._id)}
        >
          &times;
        </Button>
        <h3>{item.name}</h3>
        {/* <button onClick = {this.handleDelete}><LocalizedText>delete me</LocalizedText></button> */}
      </div>
    );
  }
}

export default ShopListItem;
