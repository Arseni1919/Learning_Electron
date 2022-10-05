const {app, BrowserWindow} = require('electron')
const path = require('path')


const isMac = process.platform === 'darwin'
const isDev = process.env.NODE_ENV !== "production"


const createMainWindow = () => {
    const mainWindow = new BrowserWindow({
        title: 'Image Resizer',
        width: isDev ? 1000 : 500,
        height: 600
    });

    // Open dev tools if in dev mode
    if (isDev) {
        mainWindow.webContents.openDevTools()
    }

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html')).then()
}

app.whenReady().then(() => {
    createMainWindow()

    app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit()
  }
})