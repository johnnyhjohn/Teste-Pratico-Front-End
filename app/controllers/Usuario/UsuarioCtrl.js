(function(){
	'use strict';

	angular.module('fronEndApp').controller('UsuarioCtrl', Usuario);

	function Usuario() {
		
		var vm = this;

		vm.usuario = {
			nome 	: 'Johnny John',
			telefone: '42 99988-0131',
			email 	: 'jhxjohn@gmail.com',
			cidade 	: 'Ponta Grossa',
			estado 	: 'Paraná',
			avatar 	: 'image/usuario.jpg'
		}
	}

})();