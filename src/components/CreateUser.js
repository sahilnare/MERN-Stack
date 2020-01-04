
import React from 'react';
import axios from 'axios';

class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    onChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
        }
        console.log(user);
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));
        this.setState({
            username: ''
        });
    }

    render() {
        return (
            <div className="create-user">
                <h3>Create a new user!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input type="text" id="username" name="username" onChange={this.onChange} value={this.state.username} autoComplete="off" />
                        <label htmlFor="username">Username</label>
                    </div>
                    <button className="btn waves-effect waves-light blue darken-2" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        );
    }
}

export default CreateUser;
