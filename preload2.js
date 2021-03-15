const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld(
    'comunication1',
    {
        
        receiveMessage: (channel, callback) => ipcRenderer.on(channel, callback)
        ,
        sendMessage: (editarP) => ipcRenderer.send('editar-producto', editarP)


    }

)