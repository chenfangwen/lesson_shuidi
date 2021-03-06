import React from 'react';
// import logo from './logo.svg';
import './App.css';
function A({x, y, date}) {
  return (
    <div>
      x: { x }
      y: { y }
      date: {date}
    </div>
  )
}
function B({x, y, date}) {
  return (
    <h2>
      x: { x }
      y: { y }
      date: {date}
    </h2>
  )
}
function WithMosuInfo(Com) {
  class WhithMouseComponent extends React.Component {
    state = {
      x: 0,
      y: 0
    }
    componentDidMount() {
      document.addEventListener('mousemove', (e) => {
        this.setState({
          x: e.clientX,
          y: e.clientY
        })
      })
    }
    render() {
      let props = this.props;

      return (<Com x={this.state.x} y={this.state.y} {...props}/>)
    }
  }
  return WhithMouseComponent
}
// 当前坐标
// 包装地狱
// (<Com x={this.state.x} y={this.state.y}/>)
// <Com date={this.state.date}/>
// 不会自动合并
const Amouse =  WithMosuInfo(WithTime(A));
const Bmouse =  WithMosuInfo(WithTime(B));
function WithTime(Com) {
  class WithTimeCom extends React.Component {
   
    state = {
      date: new Date().toLocaleTimeString()
    }
    render() {
      let props = this.props;
      return (<Com date={this.state.date} {...props}/>)
    }
  }
  return WithTimeCom;
}
function App() {
  return (
    <div className="App">
     <Amouse />
     <Bmouse />
    </div>
  );
}

export default App;