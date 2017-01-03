/**
 * Created by manu on 20/12/16.
 */

var express = require('express');
var router = express.Router();

/**
 *
 */
router.get('/frame', function(req, res){
    res.render('angularjs/frame');
});

/**
 *
 */
router.get('/usuarios', function(req, res){
    res.render('angularjs/usuarios/controller/usuario');
});

/**
 *
 */
router.get('/partidos', function(req, res){
    res.render('angularjs/partidos/controller/partido');
});

/**
 *
 */
router.get('/apuestas', function(req, res){
    res.render('angularjs/apuestas/controller/apuesta');
});


module.exports = router;