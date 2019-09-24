import {
  observable,
  action,
  computed,
  decorate,
  configure,
  runInAction
} from "mobx";

import axios from "axios";
configure({ enforceActions: "observed" });

class ItemStore {
  items = [];
  loading = false;
  error = null;

  fetchItems = () => {
    this.loading = true;
    this.error = null;
    axios
      .get("/api/items")
      .then(response =>
        runInAction(() => {
          this.items = response.data;
          this.isFetching = false;
        })
      )
      .catch(error =>
        runInAction(() => {
          this.error = error;
          this.isFetching = false;
        })
      );
  };

  addItem = item => {
    if (item) {
      axios.post("/api/items", item).then(res =>
        runInAction(() => {
          this.items.push(res.data);
          console.log(this.items);
        })
      );
    }
  };

  deleteItem = id => {
    console.log("WTF");
    if (id) {
      axios.delete(`/api/items/${id}`).then(res => {
        runInAction(() => {
          this.items = this.items.filter(val => val._id !== id);
        });
      });
    }
  };
  // get ItemCount() {}
}
decorate(ItemStore, {
  items: observable,
  loading: observable,
  error: observable,
  fetchItems: action,
  itemsLoading: action,
  deleteItem: action,
  addItem: action
  // ItemCount: computed
});

const store = new ItemStore();
export default store;
