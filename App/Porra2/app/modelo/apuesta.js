var mongoose = require('mongoose');

module.exports = mongoose.model('Apuesta', {
	partido: Partido,
	persona: Persona,
	resultado: String
});
