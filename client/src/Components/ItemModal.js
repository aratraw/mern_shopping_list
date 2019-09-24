import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { inject, observer } from "mobx-react";

class ItemModal extends Component {
  state = {
    isOpen: false,
    name: ""
  };
  render() {
    return (
      <div>
        <Button color="dark" onClick={this.toggle}>
          Добавить в список
        </Button>

        <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Добавить в список покупок
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Название</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add Shopping Item"
                  onChange={this.onChange}
                />
                <Button color="dark" onClick={this.onSubmit}>
                  Добавить
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  onSubmit = e => {
    e.preventDefault();
    const NewItem = {
      name: this.state.name
    };
    this.props.ItemStore.addItem(NewItem);
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
}

export default inject("ItemStore")(observer(ItemModal));
