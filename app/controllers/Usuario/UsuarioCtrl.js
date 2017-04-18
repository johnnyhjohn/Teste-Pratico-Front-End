(function(){
	'use strict';

	angular.module('fronEndApp').controller('UsuarioCtrl', Usuario);

	Usuario.injector = ['Request', "URL", "$routeParams", "$rootScope"];

	function Usuario(Request, URL, $routeParams, $rootScope) {
		
		var vm = this;

		active();

		function active() {
			var functions = [getUsuario()];
		}


		function getUsuario(){
			if($routeParams.slug !== undefined){
				Request.get("usuario/" + $routeParams.slug, vm.user.token)
					.then(function(res){
						console.log(res);
						vm.usuario = res[0].objeto;
				});
			}
		}

		
		function getPerfil(){
			Request.get("usuario/perfil", vm.user.token)
				.then(function(res){
					vm.usuario = res[0].objeto;
			});
		}

		vm.update = function(){
			var data = {
				token: 		vm.user.token.token,
				nome:  		$("#nome").val(),
				email:   	$("#email").val(),
				cpf: 		$("#cpf").val(),
				senha: 		$("#senha").val(),
				tipo: 		$("#tipo").val(),
				telefone: 	$("#telefone").val()
			};

			Request.put("usuario/" + $routeParams.slug, data)
				.then(function(res){
					console.log('update');
					var alerta = new alert();
					if(res[0].codigo == "SUCCESS"){
						alerta.success(res[0].mensagem);
					}else if(res[0].codigo == "DANGER"){
						alerta = new alert();
						alerta.danger(res[0].mensagem);
					}
					return res;
			});

		}

		vm.deleta = function(){

			var id = event.srcElement.attributes[0].value;
			var tr = $(event.srcElement).closest('tr');

			Request.destroy('usuario/' + id)
				.then(function(res){
					var alerta = new alert();
					if(res[0].codigo == "SUCCESS"){
						alerta.successDeleta(tr, res[0].mensagem);
					}else if(res[0].codigo == "DANGER"){
						alerta = new alert();
						alerta.danger(res[0].mensagem);
					}					
					return res;
			})
		}
	}

})();