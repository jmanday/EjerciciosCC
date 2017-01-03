/**
 * Created by manu on 5/12/16.
 */
/**
 * Back-End que gestiona los end-points de la RESTful API relacionados con la gestión de usuarios
 *
 */

var express = require('express');
var router = express.Router();
var query = require('../private/database/queries');
var multer  = require('multer');
var upload = multer({ dest: '~/CRET/downloads'});

/**
 * Sube un espacio de trabajo
 */
router.post('/upload',upload.single('avatar'), function(req, res, next) {
    var cuerpo = req.body;
    console.log("he subido ",cuerpo);
    res.status(200).json({codigo:5140});
});

module.exports = router;
