import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Post = (props) => {
    return (
        <div className="card blue lighten-2" key={props.post._id}>
            <div className="card-content white-text">
                <span className="card-title">{props.post.title}</span>
                <p className="post-text">{props.post.text}</p>
                <p>By: {props.post.username}</p>
                <p className="date">{props.post.date.substring(0, 10)}</p>
                <div className="row">
                    <div className="col s6">
                        <Link to={"/edit/" + props.post._id}>
                            <button className="btn-floating btn-large green pulse"><i className="material-icons">edit</i></button>
                        </Link>
                    </div>
                    <div className="col s6 right-align">
                        <button className="btn-floating btn-large waves-effect waves-light red" onClick={() => props.deletePost(props.post._id)}><i className="material-icons">delete</i></button>
                    </div>
                </div>
            </div>
        </div>
    )
} 

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        this.deletePost = this.deletePost.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/posts/')
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => console.log('Error: ' + err));
    }

    deletePost(id) {
        axios.delete('http://localhost:5000/posts/' + id)
            .then(res => console.log(res.data))
            .catch(err => console.log('Error: ' + err));
        this.setState({
            posts: this.state.posts.filter(post => post._id !== id)
        });
    }

    postListfunc() {
        return this.state.posts.map(post => {
            return <Post post={post} deletePost={this.deletePost} key={post._id} />
        })
    }

    render() {
        return (
            <div className="posts">
                <h3>Posts:</h3>
                {this.postListfunc()}
            </div>
        );
    }
}

export default PostList;
