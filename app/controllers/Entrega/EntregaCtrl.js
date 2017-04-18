(function(){
	'use strict';

	angular.module('fronEndApp').controller('EntregaCtrl', Entrega);

	Entrega.injector = ["URL", "$routeParams"];

	function Entrega(URL, $routeParams){

		var vm = this;

        vm.entregas = [
            {
                id          : 1,
                local       : "Rua Cesário Alvin",
                cidade   	: "Ponta Grossa",
                estado      : "Paraná",
                status 		: 'Entregue'
            },
            {
                id          : 2,
                local       : "Rua Doutor Colares",
                cidade   	: "Ponta Grossa",
                estado      : "Paraná",
                status 		: 'Entregue'
            },
            {
                id          : 3,
                local       : "Centro",
                cidade   	: "Curitiba",
                estado      : "Paraná",
                status 		: 'Parado'
            },
            {
                id          : 4,
                local       : "Rua Cesário Alvin",
                cidade   	: "Ponta Grossa",
                estado      : "Paraná",
                status 		: 'Entregue'
            },
            {
                id          : 5,
                local       : "Rua Cesário Alvin",
                cidade   	: "Ponta Grossa",
                estado      : "Paraná",
                status 		: 'Entregue'
            },
            {
                id          : 6,
                local       : "Rua Cesário Alvin",
                cidade   	: "Ponta Grossa",
                estado      : "Paraná",
                status 		: 'Entregue'
            },
        ];

        vm.addEntrega = function( entrega ) {

            if(entrega == undefined || entrega.local == "" && entrega.cidade == "" && entrega.estado == ""){
                $('.message').html("<p style='color:red'>Preenchar todos os Campos</p>");
                return false;
            }

            let novoEntrega = {
                id      : (vm.entregas[vm.entregas.length - 1].id) + 1,
                local   : entrega.local,
                cidade  : entrega.cidade,
                estado  : entrega.estado,
                status 	: 'Pendente'
            }

            vm.entregas.push(novoEntrega);

            $('.modal').modal('hide');
            $('input').val('');
            $('.message').html('');
        };

        vm.deletaEntrega = function( entrega_id ) {
            
            // let novosEntrega = vm.entregas.filter( function (pedido){
            //     if(pedido.id != entrega_id) return pedido;
            // });
            let novosEntrega = [];

            vm.entregas.map((value, key) => {
                if(value.id == entrega_id){
                    delete vm.entregas[key];
                } else{
                    novosEntrega.push(value);
                }
            })
            vm.entregas = novosEntrega;
        };
	}

})();