import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../_actions';

import logo from "../../resource/logo_only.png"
import './HomePage.css';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-faded" style={{backgroundColor : "whitesmoke"}} >
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" style={{width : '3em', marginRight : "10px"}} />
                    ARBITEE
                </a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link 1</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link 2</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link 3</a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li><a href="#"><button type="button" class="btn btn-primary"  style={{marginRight : "10px"}}>MyPage</button></a></li>
                    <li><Link to="/login"><button type="button" class="btn btn-primary">Logout</button></Link></li>
                </ul>                
            </nav>
        );
    }
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



// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';

// import { userActions } from '../../_actions';

// import logo from "../../resource/logo.png"
// import './HomePage.css';

// class HomePage extends React.Component {
//     componentDidMount() {
//         this.props.dispatch(userActions.getAll());
//     }

//     handleDeleteUser(id) {
//         return (e) => this.props.dispatch(userActions.delete(id));
//     }

//     render() {
//         const { user, users } = this.props;
//         return (
//             // <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
//                 <div className="col-md-6 col-md-offset-3">
//                     <h1>Hi {user.username}!</h1>
//                     <p>You're logged in with React!!</p>
//                     <h3>All registered users:</h3>
//                     {users.loading && <em>Loading users...</em>}
//                     {users.error && <span className="text-danger">ERROR: {users.error}</span>}
//                     {users.items &&
//                         <ul>
//                             {users.items.results.map((user, index) =>
//                                 <li key={index}>
//                                     {users.items.results[index].username}
//                                     {
//                                         user.deleting ? <em> - Deleting...</em>
//                                         : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
//                                         : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
//                                     }
//                                 </li>
//                             )}
//                         </ul>
//                     }
//                     <p>
//                         <Link to="/login"><button type="button" class="btn btn-primary">Logout</button></Link>
//                     </p>
//                     <img  src={logo} />
//                     <div className="header">
//                         <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
//                         <NavLink to="/about/FineApple" className="item" activeClassName="active">About</NavLink>
//                         <NavLink to="/posts" className="item" activeClassName="active">Post</NavLink>
//                         <NavLink to="/login" className="item" activeClassName="active">Login</NavLink>
//                         <NavLink to="/mypage" className="item" activeClassName="active">MyPage</NavLink>
//                         <NavLink to="/search" className="item" activeClassName="active">Search</NavLink>
//                     </div>
//                 </div>
//             // </nav>
//         );
//     }
// }

// function mapStateToProps(state) {
//     const { users, authentication } = state;
//     const { user } = authentication;
//     return {
//         user,
//         users
//     };
// }

// const connectedHomePage = connect(mapStateToProps)(HomePage);
// export { connectedHomePage as HomePage };