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
      console.log(_c.current);
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

class ProfilePage extends React.Component {
  //参数传递才实现 保存事件触发当时的状态 
  state = {
    count: 0
  }
  showMessage = (count) => alert('Followed ' + count);

  handleClick = () => {
    const {count} = this.state;
    setTimeout(() => this.showMessage(count), 3000);
  };
  add = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <>
        <button onClick={this.handleClick}>show</button>
        <button onClick={this.add}>+</button>
      </>
    )
  }
}

function MessageThread() {
  const [message, setMessage] = useState('');

  const showMessage = () => {
    alert('You said: ' + message);
  };

  const handleSendClick = () => {
    setTimeout(showMessage, 3000);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return <>
    <input value={message} onChange={handleMessageChange} />
    <button onClick={handleSendClick}>Send</button>
  </>;
}

function App() {
  return (
    <div className="App">
      <Counter/>
      <ProfilePage />
      <MessageThread/>
    </div>
  );
}

export default App;
