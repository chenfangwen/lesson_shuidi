import React, { Component } from 'react'
import autobind from 'autobind-decorator'
// three.js 更简单
export default class GameContainer extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { 
    }
  }
  componentDidMount() {
    this.requestGameLoop()
  }
  requestGameLoop() {
  }
  @autobind
  gameLoop () {

  }
  render() {
    return (
      <div/>
    )
  }
}
