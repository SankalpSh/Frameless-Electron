const {app, BrowserWindow} = require('electron');
const url = require('url');
const html = 'index.html'

let win = null

function boot() {
  console.log(process.type)
  win = new BrowserWindow({
    frame:false,
  })
   win.loadURL('file://' + __dirname + '/index.html');
}

app.on('ready',boot);
