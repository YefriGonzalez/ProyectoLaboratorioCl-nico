// 172.17.0.2
const mysqlhost =process.env.mysqlhost || '172.17.0.2';
const mysqluser=process.env.mysqluser || "LaboratorioPatito";
const mysqlpass=process.env.mysqlpass || "LabPatito123.";
const mysqldatabase=process.env.database || "LaboratorioPatito"
//instanciar paquete
const mysql=require('mysql');

//realizar conexion 
const connection=mysql.createConnection({
    host: mysqlhost,
    user: mysqluser,
    password: mysqlpass,
    database: mysqldatabase
});

connection.connect(function (err){
    if(err){
        console.log(err);
        console.log("NOT Connected");
    }else{
        console.log("Connected DB!")
    }
});
module.exports= connection;