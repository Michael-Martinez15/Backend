const mysql = require('mysql');
const mysqlConnection = mysql.createConnection(
    {
        host: '181.133.136.83',
        user: 'mediatecnica',
        password: '123',
        database: 'lab_mediatecnica',
        multipleStatements: true
    }
); //Fin createConnection

mysqlConnection.connect(function(err) {
        //Si hay un error entonces
    if(err){
        //Verdadero
     console.error(err);
     return;
        //Si no
    }else{}
        //Todo está bien (falso)
     console.log('base de datos conectada');
});//Fin si err

module.exports = mysqlConnection;