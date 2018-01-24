import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../resource/Home.css';
import logo from "../../resource/logo.png"

class HomeMenu extends Component {
    render() {
        return (
            <body>
            <div id="wrap">
                <header class="header">
                    <nav className="nav" >
                        <div className="container">
                            <img  src={logo} />
                        </div>
                    </nav>
                </header>
                <section class="slider_section">
                    <Link to={'/accountindex'}  className="btn1"><button class="ui teal button">START</button></Link>
                    <Link to={'/signin'} className="btn2"><button class="ui teal button">LOGIN</button></Link>
                    <Link to={'/signup'} className="btn3"><button class="ui teal button">SIGNIN</button></Link>
                </section>
                <footer class="footer"></footer>
            </div>
        </body>
        )
    }
}

export default HomeMenu;
