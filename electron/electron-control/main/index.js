let { app, BrowserWindow } = require('electron');
let win
app.on('ready',() => {
    win = new BrowserWindow({
        width: 300,
        height: 600,
        webIntegration: true
    })
    win.loadURL("http://localhost:8080");
})  
