// tabNine
const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

// Todos los middleware get,put, .. me´todos
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM modulos ORDER BY id', (err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });//Fin conexion consulta
}); //Fin mostrar todos los módulos

router.get('/modulo/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query("SELECT * FROM modulos WHERE id= ?", [id], (err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    }); // Fin conex consultar módulo por id
}); // Fin buscar módulos por su id

//Agregar un nuevo módulo
router.post('/nuevo-modulo', (req, res) => {
    const {modulo,modprefijo} = req.body; //Captura de datos
    let moduloArray = [modulo,modprefijo]; //Define arreglo de los datos capturados
    let nuevoModulo = 'INSERT INTO modulos(modulo, mod_prefijo) VALUES (?,?)'; //Definicion script sql en un nuevoModulo
    mysqlConnection.query(nuevoModulo, moduloArray, (err,results,fields) => {
        if(!err){
            return console.error(err);
        }else{
            res.json({message:modulo + 'Modulo Creado'})
        }

    }); //Fin conexion guardar un modulo
}); //Fin guardar un nuevo módulo

//Modificar un modulo
router.put('/modulo/:id', (req, res) => {
    const {modulo,modprefijo} = req.body;
    const {id} = req.params;
    mysqlConnection.query('UPDATE modulos SET modulo=?, mod_prefijo=? WHERE id=?',
    [modulo, modprefijo, id], (err, rows,fields) => {
        if(!err){
            res.json({status:'Módulo ' + modulo + 'actualiado'})
        }else{
            console.log(error);
        }
    }); //Fin consulta de actualizacion
}); //Fin modificar modulo

module.exports = router;