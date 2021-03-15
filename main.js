const { BrowserWindow, app } = require("electron")
const { ipcMain } = require("electron")
const path = require('path')

let mainWindow
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 210,
        webPreferences: {
            preload: path.join(app.getAppPath(), 'preload.js')
        }

    })
    mainWindow.loadFile('index.html')
}

let productsWin
function createWindowProducts() {
    productsWin = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            preload: path.join(app.getAppPath(), 'preload2.js')
        }

    })
    productsWin.loadFile('./products/products.html')
}

let editProductWin
function editProductWindow() {
    editProductWin = new BrowserWindow({
        width: 500,
        height: 500,
        preload: path.join(app.getAppPath(), 'preload2.js')
    })
    editProductWin.loadFile('./products/editProduct.html')
}

app.whenReady().then(createWindow)

//Abriendo ventana productos
ipcMain.on('inicio-valido', (event, args) => {
    createWindowProducts()
    productsWin.webContents.on('did-finish-load', () => {
        productsWin.webContents.send('Abrir Productos', 'Abriendo Productos')
    })
})

ipcMain.on('editar-producto', (event, args) => {
    editProductWindow()
    editProductWin.webContents.on('did-finish-load', () => {
        editProductWin.webContents.send('abriendo editor', 'Editando productos')

    })
})

//****************prueba *************
//ipcMain.on('Enviando a Main', function (event, args) {
    //console.log(args)

    //mainWindow.webContents.send('respuestaRendered', 'Mensaje recibido')
//})
//*************** Fin prueba