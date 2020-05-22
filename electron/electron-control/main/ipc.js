const {ipcMain, clipboard} = require('electron');


module.exports = function() {
  ipcMain.on('share-to-wechat', async(e, code) => {
    if (code) {
    //   console.log(code);
        clipboard.writeText(code.toString())
    }
  })
  ipcMain.handle('login', async() => {
      let code = Math.floor(Math.random()*(999999-100000) + 100000) 
      return code
  })
}