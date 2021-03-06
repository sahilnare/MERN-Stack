
import React from 'react';
import axios from 'axios';
// import $ from 'jquery';
import M from 'materialize-css';


class CreatePost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            title: "",
            text: "",
            date: new Date(),
            users: [],
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // $(document).ready(function () {
        //     $('select').formSelect();
        // });
        // let selects = document.querySelectorAll('select');
        // M.FormSelect.init(selects, {});
        // document.addEventListener('DOMContentLoaded', function () {
        //     var options = {

        //     }
        //     var elems = document.querySelectorAll('select');
        //     var instances = M.FormSelect.init(elems, options);
        // });

        // $(document).ready(function () {
        //     $('.datepicker').datepicker();
        // });
        // document.addEventListener('DOMContentLoaded', function () {
        //     var options = {
        //         defaultDate: new Date(2018, 1, 3),
        //         setDefaultDate: true
        //         format: 'dd/mm/yyyy'
        //     };
        //     var elems = document.querySelectorAll('.datepicker');
        //     var instances = M.Datepicker.init(elems, options);
        //     instances.setDate(new Date());
        // });
        M.AutoInit();
        axios.get('http://localhost:5000/users/')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        users: res.data.map(user => user.username),
                        username: res.data[0].username
                    });
                }
            })
            .catch(err => console.log('Error: ' + err));
    }

    componentDidUpdate() {
        // document.addEventListener('DOMContentLoaded', function () {
        //     var options = {

        //     }
        //     var elems = document.querySelectorAll('select');
        //     var instances = M.FormSelect.init(elems, options);
        // });
        // document.addEventListener('DOMContentLoaded', function () {
        //     var options = {
        //         defaultDate: new Date(2018, 1, 3),
        //         setDefaultDate: true
        //         format: 'dd/mm/yyyy'
        //     };
        //     var elems = document.querySelectorAll('.datepicker');
        //     var instances = M.Datepicker.init(elems, options);
        //     instances.setDate(new Date());
        // });
        M.AutoInit();
    }


    onChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    
    handleSubmit(e) {
        e.preventDefault();
        const post = {
            username: this.state.username,
            title: this.state.title,
            text: this.state.text,
            date: this.state.date,
        }
        console.log(post);
        axios.post('http://localhost:5000/posts/add', post)
            .then(res => console.log(res.data));
        this.props.history.push('/');
        //window.loaction = '/';
    }

    render() {
        const optionList = this.state.users ? this.state.users.map(user => {
            return <option key={user} value={user}>{user}</option>
        }) : null;
        return (
            <div className="create-post">
                <h3>Create a new post!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <select value={this.state.username} name="username" onChange={this.onChange} >
                            <option value="" disabled >Choose the username</option>
                            {optionList}
                        </select>
                    </div>
                    <div className="input-field">
                        <input type="text" id="post-title" name="title" onChange={this.onChange} value={this.state.title} autoComplete="off" />
                        <label htmlFor="post-title">Title</label>
                    </div>
                    <div className="input-field">
                        <input type="text" id="post-text" name="text" onChange={this.onChange} value={this.state.text} autoComplete="off" />
                        <label htmlFor="post-text">Text</label>
                    </div>
                    <button className="btn waves-effect waves-light blue darken-2" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        );
    }
}

export default CreatePost;
