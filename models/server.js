const express = require('express')
const cors = require('cors')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.middleware();
        this.routes();


    }
    middleware(){
        //CORS
        this.app.use(cors());
        //DIRECTORIO PUBLICO
        this.app.use(express.static('public'));
        //LECTURA Y PARSEO DEL BODY
        this.app.use(express.json())
    }


    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }
    
    routes(){
        this.app.use('/api/us', require('../routes/usuario'))
    }
}



module.exports = Server;