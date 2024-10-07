const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;
let splashWindow;

function createSplashWindow() {
  splashWindow = new BrowserWindow({
    width: 400,
    height: 300,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  splashWindow.loadFile('splash.html');
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile('index.html');

  mainWindow.once('ready-to-show', () => {
    splashWindow.destroy();
    mainWindow.show();
  });
}

app.whenReady().then(() => {
  createSplashWindow();

  // Simuler un temps de chargement
  setTimeout(() => {
    createMainWindow();
  }, 5000); // Ajustez cette valeur pour correspondre à la vitesse de la barre de progression

  // Créer un menu personnalisé
  const menu = Menu.buildFromTemplate([
    // Vous pouvez ajouter vos propres éléments de menu ici
  ]);

  // Définir le menu personnalisé
  Menu.setApplicationMenu(menu);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createSplashWindow();
    setTimeout(() => {
      createMainWindow();
    }, 5000); // Ajustez cette valeur pour correspondre à la vitesse de la barre de progression
  }
});s
