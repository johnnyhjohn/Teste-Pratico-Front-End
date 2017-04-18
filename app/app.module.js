(function(){
	'use strict';

	angular.module('fronEndApp', ['ngRoute', 'satellizer']);

	// Constantes para caminhos de request ou pastas
	let constantes = {
		data 	: window.location.origin + '/data/',
		partials: window.location + '/partials/'
	}

	angular.module('fronEndApp').constant('URL', constantes);
})();