import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
      <NavLink to="/about/FineApple" className="item" activeClassName="active">About</NavLink>
      <NavLink to="/posts" className="item" activeClassName="active">Post</NavLink>
      <NavLink to="/login" className="item" activeClassName="active">Login</NavLink>
      <NavLink to="/mypage" className="item" activeClassName="active">MyPage</NavLink>
      <NavLink to="/search" className="item" activeClassName="active">Search</NavLink>
    </div>
  );
};

export default Header;