import React from 'react';
import { connect } from 'react-redux';
import { PrivateRoute } from '../../_components';

import { userActions } from '../../_actions';

class wow extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
          <h2>
          wowkhkhkh
          </h2>
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


const connectedwow = connect(mapStateToProps)(wow);
export { connectedwow as wow };