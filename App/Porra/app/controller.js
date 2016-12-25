var Persona = require('./modelo/persona');
var Partido = require('./modelo/partido');
var Apuesta = require('./modelo/apuesta');

******************************METODOS PARA LOS OBJETOS PERSONA*****************************

// Obtiene todos los objetos Persona de la base de datos
exports.getPersona = function (req, res){
	Persona.find(
		function(err, persona) {
			if (err)
				res.send(err)
					res.json(persona); // devuelve todas las Personas en JSON		
				}
			);
}

// Guarda un objeto Persona en base de datos
exports.setPersona = function(req, res) {

		// Creo el objeto Persona
		Persona.create(
			{nombre : req.body.nombre,	apellido: req.body.apellido, edad: req.body.edad}, 
			function(err, persona) {
				if (err)
					res.send(err);

				// Obtine y devuelve todas las personas tras crear una de ellas
				Persona.find(function(err, persona) {
				 	if (err)
				 		res.send(err)
				 	res.json(persona);
				});
			});

	}

// Modificamos un objeto Persona de la base de datos
exports.updatePersona = function(req, res){
	Persona.update( {_id : req.params.persona_id},
					{$set:{nombre : req.body.nombre,	apellido: req.body.apellido, edad: req.body.edad}}, 
					function(err, persona) {
						if (err)
							res.send(err);

				// Obtine y devuelve todas las personas tras crear una de ellas
				Persona.find(function(err, persona) {
				 	if (err)
				 		res.send(err)
				 	res.json(persona);
				});
			});
	}

// Elimino un objeto Persona de la base de Datos
exports.removePersona = function(req, res) {
	Persona.remove({_id : req.params.persona_id}, function(err, persona) {
		if (err)
			res.send(err);

			// Obtine y devuelve todas las personas tras borrar una de ellas
			Persona.find(function(err, persona) {
				if (err)
					res.send(err)
				res.json(persona);
			});
		});
}


******************************METODOS PARA LOS OBJETOS PARTIDO*****************************

// Obtiene todos los objetos Partido de la base de datos
exports.getPartido = function (req, res){
	Partido.find(
		function(err, partido) {
			if (err)
				res.send(err)
					res.json(partido); // devuelve todas los Partidos en JSON		
				}
			);
}

// Guarda un objeto Partido en base de datos
exports.setPartido = function(req, res) {

		// Creo el objeto Persona
		Partido.create(
			{eLocal : req.body.eLocal,	eVisitante: req.body.eVisitante, fecha: req.body.fecha}, 
			function(err, partido) {
				if (err)
					res.send(err);

				// Obtine y devuelve todas las personas tras crear una de ellas
				Partido.find(function(err, partido) {
				 	if (err)
				 		res.send(err)
				 	res.json(partido);
				});
			});

	}

// Modificamos un objeto Partido de la base de datos
exports.updatePartido = function(req, res){
	Partido.update( {_id : req.params.partido_id},
					{$set:{eLocal : req.body.eLocal,	eVisitante: req.body.eVisitante, fecha: req.body.fecha}}, 
					function(err, partido) {
						if (err)
							res.send(err);

				// Obtine y devuelve todas las personas tras crear una de ellas
				Partido.find(function(err, partido) {
				 	if (err)
				 		res.send(err)
				 	res.json(partido);
				});
			});
	}

// Elimino un objeto Partido de la base de Datos
exports.removePartido = function(req, res) {
	Partido.remove({_id : req.params.partido_id}, function(err, partido) {
		if (err)
			res.send(err);

			// Obtine y devuelve todos los partidos tras borrar uno de ellos
			Partido.find(function(err, partido) {
				if (err)
					res.send(err)
				res.json(partido);
			});
		});
}