//防重复点击
var ButtonClicked = function (self) {

  self.setData({
    buttonClicked: true
  })
  // setTimeout(function () {
  //   self.setData({
  //     buttonClicked: false
  //   })
  // }, 600)
}

module.exports = {
  ButtonClicked: ButtonClicked
}