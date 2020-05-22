const { app, BrowserWindow, ipcMain } = require("electron");
//ipcMain 主进程  ipcRenderer 渲染进程

const path = require('path');
let win
const createWindow = () => {
    win = new BrowserWindow({
        width: 960,
        height: 600,
        minHeight: 500,
        minWidth: 830,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadURL(`file://${__dirname}/index.html`)
    // ipcMain
}

ipcMain.on('greet', (event, args) => {
    console.log(args);
    event.sender.send('greet', {
        message: 'hi renderer ~'
    })
})

app.on('ready',createWindow)