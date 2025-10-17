import { Component } from "react";
import UserInfo from "./UserInfoComponent";
import DisplayInfo from "./DisplayInfoComponent";

class MyComponent extends Component {

    state = {
        listUser: [
            {id: 1, name: 'Hung Nguyen', age: 22},
            {id: 2, name: 'Hiep Dang', age: 56},
            {id: 3, name: 'Khac Tam', age: 58}
        ]
    }

    render(){
        return (
            <div>
                <UserInfo/>
                <DisplayInfo listUser = {this.state.listUser} />
            </div>
        );
    }
}

export default MyComponent;