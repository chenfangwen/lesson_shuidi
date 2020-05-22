import React, { useEffect, useState } from 'react';
import './App.css';
// electron调用 NativeAPI  多进程架构
// Inter-Process Communication，进程间通信 
// electron 不支持import  
// create-react-app  0配置启动 reject 


import { ipcRenderer, remote, ipcMain } from 'electron'; // 去到IPC 
const { Menu, MenuItem } = remote;
function App() {
  const [test,setTest] = useState('')
  const [localCode, setLocalCode] = useState('');
  const [controlText, setControlText] = useState('')
  useEffect(() => {
    login()
    console.log('1','----')
  },[test]);
  const login = async () => {
    let code = await ipcRenderer.invoke('login')
    setLocalCode(code)
  }
  const handleContextMenu = (e) => {
    e.preventDefault();
    const menu = new Menu();
    menu.append(new MenuItem({
      label: '复制',
      role: 'copy'
    }))
    menu.append(new MenuItem({
      label: '分享到微信',
      click: (menuItem, win, keyboardEvent) => {
        ipcRenderer.send('share-to-wechat', '123123')
      }
    }))
    menu.popup()
  }
  const testEffect = () => {
    setTest([])
  }
  return (
    <div className="App">
      <button onClick={testEffect}>按钮</button>
      {
        controlText === ''? <>
        <div>你的控制码</div>
        <span>{localCode}</span>
        </>:
        <div>{controlText}</div>
      }
    </div>
  );
}


export default App;

