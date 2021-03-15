const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld(
    'comunication',
    {
        sendMessage: (mensaje) => ipcRenderer.send('Enviando a Main', mensaje)
        ,
        receiveMessage: (channel, callback) => ipcRenderer.on(channel, callback)
        ,
        sendMessage: (inicio) => ipcRenderer.send('inicio-valido', inicio)


    }

)