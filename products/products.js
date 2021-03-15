/* window.comunication.receiveMessage('Abrir Productos', function (event, args) {
    console.log(args)
}) */
document.getElementById('agregar').addEventListener('click', (event) => {
    window.comunication1.sendMessage('editar-producto')
    console.log('Prueba')
})

