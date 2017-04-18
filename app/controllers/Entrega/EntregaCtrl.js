(function(){
	'use strict';

	angular.module('fronEndApp').controller('EntregaCtrl', Entrega);

	Entrega.injector = ["Request", "URL", "$routeParams"];

	function Entrega(Request, URL, $routeParams){

		var vm = this;

		active();

		function active(){
			var functions = [getPessoas(), getPessoa()];
		}

		vm.setPessoa = function(){
			var data = {
				token 	 : vm.user.token.token,
				nome 	 : $("#nome").val(),
				dta_nasc : $("#dta_nasc").val(),
				email 	 : $("#email").val(),
				telefone : $("#telefone").val(),
				endereco : $("#endereco").val(),
				bairro 	 : $("#bairro").val(),
				cep 	 : $("#cep").val(),
				cpf 	 : $("#cpf").val(),
				rg 		 : $("#rg").val(),
				cidade 	 : $("#cidade").val(),
				lat 	 : $(".lat").val(),
				lng 	 : $(".lng").val()
			}
			Request.set("pessoa", data).then(function(res){
				var alerta = new alert();
				if(res[0].codigo == "SUCCESS"){
					alerta.success(res[0].mensagem);
					$("form").find('input, textarea').each(function(key, value){
						$(value).val('');
					});
				}else if(res[0].codigo == "DANGER"){
					alerta = new alert();
					alerta.danger(res[0].mensagem);
				}
				return res;
			});
		}

		vm.update = function(){
			var data = {
				token 	 : vm.user.token.token,
				nome 	 : $("#nome").val(),
				dta_nasc : $("#dta_nasc").val(),
				email 	 : $("#email").val(),
				telefone : $("#telefone").val(),
				endereco : $("#endereco").val(),
				bairro 	 : $("#bairro").val(),
				cep 	 : $("#cep").val(),
				cpf 	 : $("#cpf").val(),
				rg 		 : $("#rg").val(),
				cidade 	 : $("#cidade").val(),
				lat 	 : $(".lat").val(),
				lng 	 : $(".lng").val()
			};

			Request.put("pessoa/" + $routeParams.slug, data)
				.then(function(res){
					console.log(res, data);
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
			Request.destroy('pessoa/' + id)
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

		function getPessoas(){
			Request.get("pessoa").then(function(res){
				angular.forEach(res[0].objeto, function(value, key) {
					(value.ativo == true) ? value.ativo = "Ativo" : value.ativo = "Inativo";
				});
				console.log(res);
				vm.pessoas = res[0].objeto;
			});
		}

		function getPessoa(){
			if($routeParams.slug !== undefined){
				Request.get("pessoa/" + $routeParams.slug)
					.then(function(res){
						vm.pessoa = res[0].objeto;
				});
			}
		}
	}

})();