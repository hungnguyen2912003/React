import { Component, useState } from "react";

class CreateUser extends Component {
  state = {
    name: "",
    age: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, age } = this.state;

    if (!name || !age) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    this.props.create({ name, age: parseInt(age) });
    this.setState({ name: "", age: "" });
  };

  render() {
    return (
      <div>
        <h3>Thêm người dùng</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Tên"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Tuổi"
            value={this.state.age}
            onChange={(e) => this.setState({ age: e.target.value })}
          />
          <button type="submit">Thêm</button>
        </form>
      </div>
    );
  }
}

const CreateUserFunc = ({ create }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    create({ name, age: parseInt(age) });
    setName("");
    setAge("");
  };

  return (
    <div>
        <h3>Thêm người dùng</h3>
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        placeholder="Tên"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Age:</label>
                    <input
                        type="number"
                        placeholder="Tuổi"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default CreateUserFunc;
