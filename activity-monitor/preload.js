const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('api', {
    onUpdateCpus: (callback) => ipcRenderer.on('update-cpus', (_event, value) => callback(value))
})



