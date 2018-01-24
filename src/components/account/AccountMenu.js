import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../resource/Account.css';

const MenuItem = ({active, children, to}) => (
  <NavLink to={to} className="menu-item">
    {children}
  </NavLink>
)

const AccountMenu = () => {
  return (
    <div>
      <div className="menu">
        <MenuItem to={'/account/guide'}>가이드</MenuItem>
        <MenuItem to={'/account/accountCreate'}>계좌만들기</MenuItem>
        <MenuItem to={'/account/deposit'}>입금하기</MenuItem>
      </div>
    </div>
  )
}

export default AccountMenu;
