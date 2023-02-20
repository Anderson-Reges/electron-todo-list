require('dotenv').config()
const { BrowserWindow, app } = require('electron');

const PORT = process.env.REACT_PORT;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  win.loadURL(`http://localhost:${PORT}`)
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})