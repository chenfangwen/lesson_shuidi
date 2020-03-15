
var Animation = function(els) {
    // els 参数 
    var dur = 0.3,
      amount = '55%',
      tl = new TimelineMax({
        repeat: -1,
        yoyo: true,
        repeatDelay: 1
      });
    tl
      .add(
        fromLeft(
          els.leftAnimated
        )
      )
      .add(
        fromRight(
          els.rightAnimated
        )
      )
    //   else{
    //     tl
    //     .add(
    //       fromLeft(
    //         [els[0], els[2]]
    //       )
    //     )
    //     .add(
    //       fromRight(
    //         [els[1],els[3]]
    //       )
    //     )   
    //   }
    
    function fromLeft(el) {
      return TweenMax.from(el, dur, {x:"-=" + amount, autoAlpha:0.2})
    }
    function fromRight(el) {
      return TweenMax.from(el, dur, {x:"+=" + amount, autoAlpha:0.2})
    }
  }
  // 流程式的， 不适合复用 
  
  
  // var tl = new TimelineMax({
  //   repeat: -1,
  //   yoyo: true,
  //   repeatDelay: 1
  // })
  // tl.from(['#box1, #box3'], 0.3, {x: '-=55%'});
  // tl.from(['#box2'], 0.3, {x: '+=55%'});
  