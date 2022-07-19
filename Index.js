const { Console } = require('console')
const http = require('http')
const server = http.createServer((req,res)=>{
    res.end('Hola mundo')
})

const PORT = 8080
server.listen(PORT, err => {
    if(err) return console.log(`Error en el servidor: ${err}`)
    console.log(`Servido http escuchando en el puerto ${PORT}`)
    console.log(`Hola mundo Node.JS`)
})