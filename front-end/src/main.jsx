const { BrowserWindow, app } = require('electron');

const PORT = process.env.API_PORT || 3008;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  win.loadURL(`http://localhost:${PORT}`)
};

app.whenReady().then(() => {
  createWindow();
});