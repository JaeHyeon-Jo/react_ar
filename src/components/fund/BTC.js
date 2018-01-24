import React, { Component } from 'react';

import '../../resource/Portfolio.css';



class BTC extends Component {

  state = {
    price : null
  }

  componentDidMount(){
    this._getPrice()
  }
  
  _getPrice = () => {
  fetch(`https://api.bithumb.com/public/ticker/BTC`)
  .then(response => response.json())
  .then(json => {
      this.setState({
          price: parseInt(json.data.buy_price)
      })
    })
  }

  render() {
    const {price} = this.state
    console.log(typeof(price))
    return (
      <h1> {price} </h1>
    );
  }
}

export default BTC;
