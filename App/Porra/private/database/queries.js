/**
 * Created by manu on 20/10/16.
 * Módulo que gestiona consultas a la DB Mysql
 */

var mysql = require("./connections");

/**
 * Obtiene todos los Users de la base de datos
 * @param callback
 */
exports.getUsers = function(callback){
    // console.log("QUERY GETUSERS");
    mysql.query('SELECT * FROM Users', function(err, rows) {
        // connected! (unless `err` is set)
        if(!err){
            // console.log("no ha habido error en query");
            callback(null,rows);
        }
        else{
            console.log("error en query,devolviendo");
            callback(err,null);
        }
    });
};

/**
 * Obtiene todos los Users usersManagement de la base de datos(state=0)
 * @param callback
 */
exports.getUsersPendientes = function(callback){
    console.log("QUERY GETUSERS PENDIENTES");
    mysql.query("SELECT * FROM Users where state=" + mysql.escape("0") + " and isAdmin!=1", function(err, rows) {
        // connected! (unless `err` is set)
        if(!err){
            console.log("no ha habido error en query",rows);
            callback(null,rows);
        }
        else{
            console.log("error en query,devolviendo");
            callback(err,null);
        }
    });
};

/**
 * Obtiene todos los Users validos de la base de datos(state=1)
 * @param callback
 */
exports.getUsersValidos = function(callback){
    console.log("QUERY GETUSERS VALIDOS");
    mysql.query("SELECT * FROM Users where state=1 and isAdmin!=1", function(err, rows) {
        // connected! (unless `err` is set)
        if(!err){
            console.log(rows.length);
            callback(null,rows);
        }
        else{
            console.log("error en query,devolviendo");
            callback(err,null);
        }
    });
};

/**
 * Valida a un usuario(state=1)
 * @param arr
 * @param callback
 */
exports.validarUsers = function(arr,callback){
    var error=false;
    if(arr.length > 1){
        console.log("VALIDANDO Users DEL ARRAY....");
        console.log("tam "+arr.length);
        for(var i=0; i< arr.length; i++){
            console.log("validando a "+arr[i]);
            mysql.query("UPDATE Users SET state=1 where id="+arr[i].id, function(err, rows) {
                if(err){
                    console.log("error!");
                    console.log(err);
                    return callback(err,null);
                }
            });
            if(i==arr.length-1){
                console.log("He validado los Users del array");
                callback(null,{});
            }
        }
    }else{
        // console.log("VALIDANDO UN USUARIO",arr[0]);
        var iduser=arr[0].id;
        mysql.query("UPDATE Users SET state=" + mysql.escape("1") + "where id="+iduser, function(err, rows) {
            if(!err){
                callback(null,rows);
            }
            else{
                callback(err,null);
            }
        });
    }
};

/**
 * Invalida a un usuario (state=2)
 * @param arr
 * @param callback
 */
exports.invalidarUsers = function(arr,callback){

    var error=false;
    if(arr.length > 1){
        console.log("VALIDANDO Users DEL ARRAY....");
        console.log("tam "+arr.length);
        for(var i=0; i< arr.length; i++){
            console.log("validando a "+arr[i]);
            mysql.query("UPDATE Users SET state=2 where id="+arr[i].id, function(err, rows) {
                if(err){
                    return callback(err,null);
                }
            });
            if(i==arr.length-1){
                console.log("He validado los Users del array");
                callback(null,{});
            }
        }
    }else{
        // console.log("VALIDANDO UN USUARIO",arr[0]);
        var iduser=arr[0].id;
        mysql.query("UPDATE Users SET state=2 where id="+arr[0].id, function(err, rows) {
            if(!err){
                callback(null,rows);
            }
            else{
                console.log("error al invalidar");
                console.log(err);
                callback(err,null);
            }
        });
    }
};

/**
 * Elimina un usuario de la base de datos
 * @param data
 * @param callback
 */
exports.deleteUser = function(data,callback) {

    mysql.query('DELETE FROM Users where username= ?', data.username, function (err, datos) {
        // connected! (unless `err` is set)
        // console.log("borrando a "+data.username);
        if(!err){
            callback(null,datos);
        }
        else{
            callback(err,null);
        }
    });
};

/**
 * Inserta un usuario nuevo en la base de datos
 * @param data
 * @param callback
 */
exports.addUser = function(data,callback) {
    data.isAdmin=0;
    data.state=0;
    console.log(data);
    mysql.query('INSERT INTO Users SET ?', data, function (err, datos) {
        // connected! (unless `err` is set)
        if(err){
            console.log("error al insertar a ",err);
            return callback(err,null);
        }
        callback(null,datos);
    });
};

/**
 * Devuelve el workspace correspondiente a un usuario
 * @param callback
 */
exports.getWorkspace = function (data,callback) {
    console.log("query de getworkspace del user con id "+data);
    mysql.query('SELECT * FROM Workspaces where idUser='+data, function (err, rows) {
        if (!err) {
            callback(null,rows);
        }
        else {
            callback(err,null);
        }
    });
};

/**
 * Inserta un workspace nuevo en la base de datos
 * @param data
 * @param callback
 */
exports.addWorkspace = function(data,callback) {
    mysql.query('INSERT INTO Workspaces SET ?', data, function (err, datos) {
        // connected! (unless `err` is set)
        if(err){
            console.log("error al insertar a ",data.name);
            return callback(err,null);
        }
        callback(null,datos);
    });
};

/**
 * Elimina un workspace o conjunto de Workspaces de la base de datos
 * @param data
 * @param callback
 */
exports.deleteWorkspaces = function(arr,callback) {
    var error=false;
    if(arr.length > 1){
        for(var i=0; i< arr.length; i++){
            console.log("Eliminando a -"+arr[i].id);
            mysql.query('DELETE FROM RTU where idWorkspace='+arr[i].id, function(err,rows){
                //console.log("ya he borrado los rtu del espacio de trabajo si los hubiera",arr[i].id);
                    mysql.query('DELETE FROM Workspaces where id='+arr[i].id, function(err, rows) {
                        if(err){
                            console.log("error al eliminar workspace "+arr[i].id);
                            return callback(err,null);
                        }else{
                            console.log("borrados con exito el workspace",arr[i].id);
                            if(i==arr.length-1){
                                console.log("He Eliminado los Workspaces del array");
                                callback(null,rows);
                            }
                        }
                    });
            });
        }
    }else{
        // console.log("VALIDANDO UN USUARIO",arr[0]);
        var idworkspace=arr[0].id;
        mysql.query('DELETE FROM Workspaces where id='+idworkspace, function(err, rows) {
            if(!err){
                callback(null,rows);
            }
            else{
                callback(err,null);
            }
        });
    }
};

/**
 * Inserta una RTU nueva en el Workspace seleccionado y la base de datos
 * @param data
 * @param callback
 */
exports.addRTU = function(data,callback) {
    mysql.query('INSERT INTO RTU SET ?', data, function (err, datos) {
        // connected! (unless `err` is set)
        if(err){
            // console.log("error al insertar a ",data.nombre);
            return callback(err,null);
        }
        callback(null,datos);
    });
};

/**
 * Comprueba las credenciales de un usuario e inicia la sesión
 *
 */
exports.loginQuery = function (data, callback) {

    if (data && data.username != "" && data.password != "") {
        // console.log("Login correcto con estos datos --> "+data);
        mysql.query('SELECT * FROM Users WHERE username="' + data.username + '" and password="' + data.password + '"', function (err, user) {
            // console.log("fin de la consulta " + err);
            // console.log(user);
            if(!err)
                callback(null, user);
            else
                callback(err,null);
        });
    } else {
        // console.log("falta algun dato");
        var err = {
            error: "Faltan datos"
        };
        console.log("Algun error hay");
        callback(err, null);
    }
};

/**
 * Obtiene todos los Users de la base de datos
 * @param id
 * @param callback
 */
exports.getUsersData = function(id,callback){

    // console.log("QUERY GETUSERS");
    mysql.query('SELECT * FROM Users where id=' + id + '', function(err, rows) {
        // connected! (unless `err` is set)
        if(!err){
            // console.log("no ha habido error en query");
            // console.log("la informacion obtenida del usuario "+id+" es la siguiente: ");
            // console.log(rows[0]);
            callback(null,rows[0]);
        }
        else{
            console.log("error en query,devolviendo :(");
            callback(err,null);
        }
    });
};

/**
 * Obtiene todas las RTU de un espacio de trabajo
 * @param id
 * @param callback
 */
exports.getRTUs = function (id,callback) {
    mysql.query('SELECT * FROM RTU where idWorkspace=' + id, function (err, rows) {
        if (!err) {
            console.log("Devolviendo RTUs!!!!",rows.length);
            callback(null, rows);
           // console.log("tama:" + rows)
        }
        else {
            console.log("error en query,devolviendo :(");
            callback(err, null);
        }
    });

};