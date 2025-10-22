import { Component } from "react";

class DisplayUser extends Component {
  handleDelete = (id) => {
    if (window.confirm("Bạn có muốn xóa người dùng này?")) {
      this.props.del(id);
    }
  };

  render() {
    const { users } = this.props;

    return (
      <div>
        <h2>Danh sách người dùng</h2>
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Tên</th>
              <th>Tuổi</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>
                    <button onClick={() => this.handleDelete(index)}>
                      Xóa
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">Không có người dùng nào</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

const DisplayUserFunc = ({ users, del }) => {
  const handleDelete = (id) => {
    if (window.confirm("Bạn có muốn xóa người dùng này?")) {
      del(id);
    }
  };

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Xóa</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Không có người dùng nào</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayUserFunc;

