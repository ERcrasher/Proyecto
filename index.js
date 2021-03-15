document.getElementById('login').addEventListener('submit', (event) => {
    event.preventDefault()

    //Abriendo ventana productos
    window.comunication.sendMessage('inicio-valido')
    
    //Prueba
    //window.comunication.sendMessage('mensaje por preload')
})

//window.comunication.receiveMessage('respuestaRendered', function (event, args) {
    //console.log(args)
//})