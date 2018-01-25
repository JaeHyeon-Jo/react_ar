import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import { Header } from '../../components/header/index';

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="col-md-6 offset-md-3" style={{ marginTop : "200px"}} >
          <Link to="/accountindex">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Look_Around
          </button></Link>
        </div>
      </div>
    );
  }
}

export {IndexPage};
