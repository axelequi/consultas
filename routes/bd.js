var mysql=require('mysql');

var conexion=mysql.createConnection({
   host:'remotemysql.com', 
   user:'U51fGn1Vnw', 
   password:'9sO0PQMWx9', 
   database:'U51fGn1Vnw' 
});

conexion.connect(function (error){
    if (error)
        console.log('Problemas de conexion con mysql');
    else
        console.log('se inicio conexion');
});


module.exports=conexion;

