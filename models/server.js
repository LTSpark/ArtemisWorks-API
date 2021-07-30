const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const { dbConnection } = require('../config/database');

class Server{

    constructor(){
        this.app  = express();
        this.port = process.env.PORT;
        //database connection
        this.dbConnection();
        //middlewares
        this.middlewares();
        //application routes
        this.routes();
    }

    async dbConnection(){
        await dbConnection()
    }

    middlewares(){
        //CORS
        this.app.use(cors());
        //JSON parse
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        //file-upload
        this.app.use(fileUpload({
            limits: { fileSize: 50 * 1024 * 1024 },
            useTempFiles: true,
            tempFileDir: '/tmp'
        }));
    }

    routes(){
        this.app.use('/',require('../routes/index'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log("Listening port",this.port);
        });
    }
}

module.exports=Server;