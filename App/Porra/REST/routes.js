/**
 * Created by manu on 20/12/16.
 */

var express = require('express');
var router = express.Router();
var query = require('../private/database/queries');

/**
 * Renderiza la vista principal con cabeceras,footer,etc
 */
router.get('/', function(req, res, next) {
    res.render('views/layout');
});

/**
 * Ruta GET para renderizar plantilla de Error
 */
router.get('/404', function(req, res){
    res.render('views/error');
});

/**
 * Ruta GET para renderizar plantilla de Error
 */
router.get('/403', function(req, res){
    res.render('views/403');
});

/**
 *
 */
router.get('/frame', function(req, res){
    console.log("ENTRAAA");
    res.render('angularjs/frame');
});

/**
 *
 */
router.get('/usuario', function(req, res){
    res.render('angularjs/usuario');
});


module.exports = router;