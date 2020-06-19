import React, { useState, useEffect } from 'react';
// import useTime from './useClock.js' //引入自定义hook
import Confirm from './components/Confirm'
import Counter from './components/Counter'
// function App() {
//   // const time = useTime();
//   const [ifShow, setIfShow] = useState(false)
//   function showConfirm() {
//     setIfShow(true)
//   }
//   function cacle() {
//     setIfShow(false)
//   }
//   function confirm() {
//     setIfShow(false);
//     alert('我也爱你')
//   }
//   const data = {
//     text: '你爱我吗？',
//     cacleText: "不爱",
//     confirmText: "爱",
//     cacle,
//     confirm
//   }
//   return (
//     // <div>{time}</div>
//     <div>
//       <button onClick={showConfirm}>显示弹框</button>
//       {
//         ifShow && <Confirm data={data} />
//       }
//     </div>
//   )
// }



const App = () => {
  const [count1, setCount1] = React.useState(0)
  const [count2, setCount2] = React.useState(0)

  const increaseCounter1 = () => {
      setCount1(count1 => count1 + 1)
  }
  console.log('父组件')
  return (
      <>
          <button onClick={increaseCounter1}>Increase counter 1</button>
          <Counter value={count1}>Counter 1</Counter>
          <Counter value={count2}>Coutner 2</Counter>
      </>
  )
}

export default App