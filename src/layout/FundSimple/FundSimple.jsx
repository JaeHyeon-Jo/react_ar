import React from 'react';
import { Link } from 'react-router-dom';

import {Header} from '../../components/header'
import {SimpleChart} from '../../components/Charts/SimpleChart'

const FundSimple = () => {
  return (
    <div>
      <Header/>
      <div className="col-md-6 offset-md-3" style={{ marginTop : "100px"}} >
        <Link to="/login">
        <button type="button" className="btn btn-primary btn-lg btn-block">
          Make Fund
        </button></Link>
      </div>
      <div className="container" style={{ marginTop : "50px"}} >
        <div className="row">
          <div className="col">
            user
          </div>
          <div className="col-10">
            <SimpleChart/>
          </div>
          <div className="col">
            10%
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop : "50px"}} >
        <div className="row">
          <div className="col">
            user
          </div>
          <div className="col-10">
            <SimpleChart/>
          </div>
          <div className="col">
            10%
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop : "50px"}} >
        <div className="row">
          <div className="col">
            user
          </div>
          <div className="col-10">
            <SimpleChart/>
          </div>
          <div className="col">
            10%
          </div>
        </div>
      </div>
    </div>
  );
};

export {FundSimple};