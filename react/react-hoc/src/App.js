import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class A extends React.Component {
  render() {
    const {x,y} = this.props;
    return (
      <div>
        x: {x} - y: {y}
      </div>
    )
  }
}
class B extends React.Component {
  render() {
    const {x,y} = this.props;
    return (
      <div>
        <h1>x: {x} - y: {y}</h1>
      </div>
    )
  }
}

const Axy = withMouseInfo(A)
const Bxy = withMouseInfo(B)

function withMouseInfo(Compoent) {

  class MouseXy extends Component {
    state = {
      x:0,
      y:0
    }
    componentDidMount() {
      document.body.addEventListener('mousemove',(e) => {
        // console.log(e.clientX,e.clientY)
        this.setState({
          x:e.clientX,
          y:e.clientY
        })
      })
    }
    render() {
      const {x,y} = this.state
      return(
        <Compoent x={x} y={y} />
      )
    }
  }
  return MouseXy
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Axy></Axy>
        <Bxy></Bxy>
      </div>
    )
  }
}

export default App;
