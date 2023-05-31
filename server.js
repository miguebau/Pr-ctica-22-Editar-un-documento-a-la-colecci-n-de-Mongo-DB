let express=require('express'); //importamos express
const mongoose = require('mongoose'); // importamos mongoose 
//Rutas
let personsRoutes = require('./src/routes/person');//definimos una variable para usar 
mongoose.Promise = global.Promise;
let app=express(); //Definimos una variable 
let port=process.env.PORT || 3000; //
require('dotenv').config(); //dotenv permite usar las variables 

//Configuraciones
mongoose.connect(process.env.MONGODB).then(()=>console.log("Base en linea")).catch((err)=>console.log(err)); 

app.use('/assets', express.static(__dirname+'/public'));
app.use(express.urlencoded({extended: false})) 
app.set('view engine', 'ejs'); // Usamos el motor de vistas ejs p
app.use('/',(req, res, next) => {
    console.log('Request URL:' + req.url);
    next()
});

//Redireccion
app.use(personsRoutes); // Llamamos a la variable 

app.listen(port,()=>{console.log("Servidor en linea")}); // Inicamos el server




