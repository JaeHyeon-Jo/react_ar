import React, { Component } from 'react';

import '../../resource/Portfolio.css';


class Portfoliodetail extends Component {
  render() {
    return (
      <div className="Portfolio">
        <p className="Portfolio-intro">
          <code>##</code> 님의 포토폴리오</p>
          <button class="Investment">투자하기 버튼</button>
          <div className="Portfolioc">현황</div>
          <div className="Portfolios">스펙</div>
          <div className="Portfoliop">수익</div>
      </div>
    );
  }
}

export default Portfoliodetail;
