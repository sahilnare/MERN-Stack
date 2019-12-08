import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import EditPost from './components/EditPost';
import CreatePost from './components/CreatePost';
import CreateUser from './components/CreateUser';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Route exact path="/" component={PostList} />
          <Route path="/edit/:id" component={EditPost} />
          <Route path="/create-post" component={CreatePost} />
          <Route path="/create-user" component={CreateUser} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


