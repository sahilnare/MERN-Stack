import React from 'react';
import { NavLink } from 'react-router-dom';

function App() {
    return (
        <nav className="nav-wrapper blue darken-2">
            <div className="container">
                <NavLink to="/" className="brand-logo">BlogSplash</NavLink>
                <ul className="right">
                    <li><NavLink to="/create-post">Create Post</NavLink></li>
                    <li><NavLink to="/create-user">Create User</NavLink></li>
                    <li><NavLink to="/">Posts</NavLink></li>
                </ul>
            </div>

        </nav>
    );
}

export default App;
