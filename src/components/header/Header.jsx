import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../resource/logo_only.png'

const Header = () => (
    <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-faded" style={{backgroundColor : "whitesmoke"}} >
        <div className="navbar-brand" style={{fontFamily : 'Courier New'}} ><Link to="/" style={{textDecoration : 'none', color : 'black'}} >
            <img src={logo} alt="Logo" style={{width : '3em', marginRight : "10px" }} />
                ARBITER
            </Link>
        </div>
        <ul className="navbar-nav ml-auto">
            <li><Link to="/login"><button type="button" className="btn btn-primary" style={{marginRight : "10px"}}>Login</button></Link></li>
            <li><Link to="/register"><button type="button" className="btn btn-primary">Register</button></Link></li>
        </ul>           
    </nav>
    );

export {Header}




