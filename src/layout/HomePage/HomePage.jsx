import React from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

import logo from '../../resource/logo_only.png';
import {wow} from '../../components/wow';
import {MyPage} from '../MyPage';


class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    // handleDeleteUser(id) {
    //     return (e) => this.props.dispatch(userActions.delete(id));
    // }

    render() {
        const { user, users } = this.props;
        return (
            <div>
            <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-faded" style={{backgroundColor : "whitesmoke"}} >
                <div className="navbar-brand"><Link to="/home">
                    <img src={logo} alt="Logo" style={{width : '3em', marginRight : "10px"}} />
                    ARBITEE
                </Link>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="nav-link"><Link to="/home/wow">
                            <button type="button" className="btn btn-outline-secondary">
                            Wow</button></Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link"><Link to="/home/redux">
                            <button type="button" className="btn btn-outline-secondary">
                            Yes</button></Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link"><Link to="/home/relay">
                            <button type="button" className="btn btn-outline-secondary">
                            Relay</button></Link>
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li><Link to="/home/Mypage"><button type="button" className="btn btn-primary"  style={{marginRight : "10px"}}>Hi {user.username}!</button></Link></li>
                    <li><Link to="/login"><button type="button" className="btn btn-primary">Logout</button></Link></li>
                </ul>           
            </nav>
            <div style={{ marginTop : "100px"}}>
            <Switch>
                <Route path="/home/wow" component={wow} />
                <Route path="/home/MyPage" component={MyPage} />
                <Route component={hello} />
            </Switch>
            </div>            

            </div>
        );
    }
}

const hello = () => {
    return(
      <h2>
        hello
      </h2>
    )
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };