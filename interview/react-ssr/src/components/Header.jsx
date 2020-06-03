import React, { Component } from 'react';


class Header extends Component {
  text() {
    console.log('aaaa')
  }
  render() {
    return (
      <button onClick={this.text}> header </button>
    )
  }
}
export default Header;
