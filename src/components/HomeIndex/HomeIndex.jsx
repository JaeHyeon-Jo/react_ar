import React from 'react';
import { Link } from 'react-router-dom';

const HomeIndex = () => {
  return (
    <div className="col-md-6 offset-md-3" >
      <h1>Hello! Let's make some money!</h1>
        <Link to="/home">
        <button type="button" className="btn btn-primary btn-lg btn-block" style={{ marginTop : "50px"}} >
          Make Account
        </button></Link>
        <Link to="/FundSimple">
        <button type="button" className="btn btn-primary btn-lg btn-block" style={{ marginTop : "30px"}} >
          Look Around
        </button></Link>
    </div>
  );
};

export {HomeIndex};