import React, { Component, PropTypes } from 'react'

export default class Game extends Component {
  // react es7 class 静态属性 react prop 检测的机房
  // 怎么配置？
  constructor() {
    super()
  }
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    dfd:  PropTypes.number.isRequired,
  }
}
