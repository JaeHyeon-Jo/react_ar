import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import { Header } from '../../components/header/index';
import {IndexChart} from '../../components/Charts/indexChart'


class IndexPage extends Component {

  constructor() {
    super();

    this.state = {
      count : null
    }
  }

  componentDidMount(){
    fetch(`http://45.32.10.63:8000/accounts/user`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
          count : json.count
      })
    })
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <Header/>
        <div className="col-md-6 offset-md-3" style={{ marginTop : "200px"}} >
          <Link to="/FundSimple">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Look_Around
          </button></Link>
          <div style={{ marginTop : "100px"}} >
            <h1>Current investor {count}</h1>
          </div>
          <div style={{ marginTop : "100px"}} >
            <IndexChart/>
          </div>
        </div>
      </div>
    );
  }
}

export {IndexPage}
