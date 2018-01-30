'use strict';

import { app, BrowserWindow, ipcMain } from 'electron';
import Cyberoam from 'cyberoam';

const isDevelopment = process.env.NODE_ENV !== 'production';
const cyberoam = new Cyberoam();

// Global reference to mainWindow
// Necessary to prevent win from being garbage collected
let mainWindow;
let liveInterval;

function createMainWindow() {
  // Construct new BrowserWindow
  const window = new BrowserWindow();

  // Set url for `win`
  // points to `webpack-dev-server` in development
  // points to `index.html` in production
  const url = isDevelopment
    ? `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`
    : `file://${__dirname}/index.html`;

  if (isDevelopment) {
    window.webContents.openDevTools();
  }

  window.loadURL(url);

  window.on('closed', () => {
    mainWindow = null;
  });

  window.webContents.on('devtools-opened', () => {
    window.focus();
    setImmediate(() => {
      window.focus();
    });
  });

  return window;
}

// Quit application when all windows are closed
app.on('window-all-closed', () => {
  // On macOS it is common for applications to stay open
  // until the user explicitly quits
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  // On macOS it is common to re-create a window
  // even after all windows have been closed
  if (mainWindow === null) mainWindow = createMainWindow();
});

// Create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow();
});

function login(username, password) {
  cyberoam
    .login(username, password)
    .then(() => {
      liveInterval = setInterval(() => {
        live(username, () => {
          login(username, password);
        });
      }, 180 * 1000);
      mainWindow.webContents.send('logged-in', username);
    })
    .catch(err => {
      console.error(err);
    });
}

function live(username, callback) {
  cyberoam.checkLiveStatus(username).catch(callback);
}

ipcMain.on('login', (event, { username, password }) => login(username, password));
