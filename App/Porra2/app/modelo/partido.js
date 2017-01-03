var mongoose = require('mongoose');

module.exports = mongoose.model('Partido', {
	eLocal: String,
	eVisitante: String,
	fecha: String
});