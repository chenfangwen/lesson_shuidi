let { app, BrowserWindow } = require('electron');
const handleIpc = require('./ipc')
let win
app.on('ready',() => {
    win = new BrowserWindow({
        width: 900,
        height: 600,
        webIntegration: true,
        webPreferences: {
            nodeIntegration: true
        }
    })
    handleIpc()
    win.loadURL("http://localhost:3000");
})
