var Persona = require('./modelo/persona');
var Partido = require('./modelo/partido');
var Controller = require ('./controller');

module.exports = function(app) {

	***************PERSONAS******************
	// devolver todos los Personas
	app.get('/api/persona', Controller.getPersona);
	// Crear una nueva Persona
	app.post('/api/persona', Controller.setPersona);
	// Modificar los datos de una Persona
	app.put('/api/persona/:persona_id', Controller.updatePersona);
	// Borrar una Persona
	app.delete('/api/persona/:persona_id', Controller.removePersona);

	***************PARTIDOS******************
	// devolver todos los Partidos
	app.get('/api/partido', Controller.getPartido);
	// Crear una nuevo Partido
	app.post('/api/partido', Controller.setPartido);
	// Modificar los datos de un Partido
	app.put('/api/partido/:partido_id', Controller.updatePartido);
	// Borrar un Partido
	app.delete('/api/partido/:partido_id', Controller.removePartido);

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});
};