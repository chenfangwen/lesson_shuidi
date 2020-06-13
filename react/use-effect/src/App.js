import React,{useState, useEffect, useRef} from 'react';
import './App.css';
// let _c = {
//   current: null
// }
function Counter() {
  const [count, setCount] = useState(0)
  const [songList, setSongList] = useState([])
  const _c = useRef()   // () => return {current: }
  _c.current = count
  function handleShow() {
    setTimeout(() => {
      console.log(_c.current );
    }, 3000);
  }
  function handleAdd() {
    setCount(count + 1);
  }
  let tag = ''
  useEffect(() => {
    fetch('http://neteasecloudmusicapi.zhaoboy.com/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA')
    .then(res => res.json())
    .then((res) => {
      setSongList(res.result.songs)
    })
  },[])
  return (
    <div>
      count: { count }
      <button onClick={handleAdd}> + </button>
      <button onClick={handleShow}>show count</button>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
