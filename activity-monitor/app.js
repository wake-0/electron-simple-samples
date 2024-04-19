const {app, BrowserWindow} = require('electron');
const path = require('node:path')
const os = require('node:os');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: "#111",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  })

  win.loadFile('index.html');

  // Update the values of the CPUs every second
  setInterval(() => win.webContents.send('update-cpus', os.cpus()), 1000);
}

app.whenReady().then(() => {
  createWindow();
})