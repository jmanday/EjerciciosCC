angular.module('MainApp', [])


function mainController($scope, $http) {
	$scope.newPersona = {};
	$scope.personas = {};
	$scope.selected = false;
	$scope.newPartido = {};
	$scope.partidos = {};
	$scope.selectedP = false;

	***********************PERSONAS***********************
	// Obtenemos todos los datos de la base de datos
	$http.get('/api/persona').success(function(data) {
		$scope.personas = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});


	// Función para registrar a una persona
	$scope.registrarPersona = function() {
		$http.post('/api/persona', $scope.newPersona)
		.success(function(data) {
				$scope.newPersona = {}; // Borramos los datos del formulario
				$scope.personas = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de una persona
	$scope.modificarPersona = function(newPersona) {
		$http.put('/api/persona/' + $scope.newPersona._id, $scope.newPersona)
		.success(function(data) {
				$scope.newPersona = {}; // Borramos los datos del formulario
				$scope.personas = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto persona conocido su id
	$scope.borrarPersona = function(newPersona) {
		$http.delete('/api/persona/' + $scope.newPersona._id)
		.success(function(data) {
			$scope.newPersona = {};
			$scope.personas = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectPerson = function(persona) {
		$scope.newPersona = persona;
		$scope.selected = true;
		console.log($scope.newPersona, $scope.selected);
	};


	***********************PARTIDOS***********************
	// Obtenemos todos los datos de la base de datos
	$http.get('/api/partido').success(function(data) {
		$scope.partidos = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});


	// Función para registrar a un partido
	$scope.registrarPartido = function() {
		$http.post('/api/partido', $scope.newPartido)
		.success(function(data) {
				$scope.newPartido = {}; // Borramos los datos del formulario
				$scope.partidos = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de un partido
	$scope.modificarPartido = function(newPartido) {
		$http.put('/api/partido/' + $scope.newPartido._id, $scope.newPartido)
		.success(function(data) {
				$scope.newPartido = {}; // Borramos los datos del formulario
				$scope.partidos = data;
				$scope.selectedP = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto partido conocido su id
	$scope.borrarPartido = function(newPartido) {
		$http.delete('/api/partido/' + $scope.newPartido._id)
		.success(function(data) {
			$scope.newPartido = {};
			$scope.partidos = data;
			$scope.selectedP = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectPartido = function(partido) {
		$scope.newPartido = partido;
		$scope.selectedP = true;
		console.log($scope.newPartido, $scope.selectedP);
	};
}