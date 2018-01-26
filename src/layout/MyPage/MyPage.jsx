import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { userActions } from '../../_actions';
import { MyPageChart } from '../../components/Charts/MyPageChart/index';

class MyPage extends React.Component {

  componentDidMount() {
      this.props.dispatch(userActions.getAll());
  }

  render(){
    const { user, users } = this.props;
    return (
      <div>
        <h1>hello {user.username}!</h1>
        <Link to='/home/EditMyPage'>
          <button type="button" class="btn btn-primary btn-lg">Edit</button>
        </Link>
        <MyPageChart/>
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