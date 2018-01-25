import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class MyPage extends React.Component {

  componentDidMount() {
      this.props.dispatch(userActions.getAll());
  }

  render(){
    const { user, users } = this.props;
    return (
      <div>
        <h1>hello {user.username}!</h1>
      </div>
    );
  }
};

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
      user,
      users
  };
}

const connectedMypage = connect(mapStateToProps)(MyPage);
export { connectedMypage as MyPage };