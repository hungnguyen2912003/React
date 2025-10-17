import { Component } from "react";

class DisplayInfo extends Component {
    render() {
        const { listUser } = this.props;
        console.log(listUser);
        
        return (
            <div>
                <h2>List users</h2>
                {
                    listUser.map((user) => {
                        return (
                            <div key={user.id}>
                                User id {user.id} - Name: {user.name} - Age: {user.age}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default DisplayInfo