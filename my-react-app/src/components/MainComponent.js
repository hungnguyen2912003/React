import { Component, useState } from "react";
import CreateUser from "./CreateUserComponent";
import DisplayUser from "./DisplayUserComponent";

class Main extends Component {
  state = {
    listUsers: [
      { name: "Hưng Nguyễn", age: 22 },
      { name: "Trần Bình", age: 25 },
    ],
  };

  handleCreate = (obj) => {
    this.setState({
      listUsers: [...this.state.listUsers, obj],
    });
  };

  handleDelete = (id) => {
    const newList = this.state.listUsers.filter((_, i) => i !== id);
    this.setState({
      listUsers: newList,
    });
  };

  render() {
    return (
      <div>
        <DisplayUser users={this.state.listUsers} del={this.handleDelete} />
        <br />
        <CreateUser create={this.handleCreate} />
      </div>
    );
  }
}

const MainComponent = () => {
  const [list, setList] = useState([
    { name: "Hưng Nguyễn", age: 22 },
    { name: "Trần Bình", age: 25 },
  ]);

  const handleCreate = (obj) => {
    setList([...list, obj]);
  };

  const handleDelete = (id) => {
    setList(list.filter((_, i) => i !== id));
  };

  return (
    <div>
      <DisplayUser users={list} del={handleDelete} />
      <br />
      <CreateUser create={handleCreate} />
    </div>
  );
};

export default Main;
