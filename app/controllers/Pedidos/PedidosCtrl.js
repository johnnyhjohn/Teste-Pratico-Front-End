(function(){
    'use strict';

    angular.module('fronEndApp').controller('PedidosCtrl', Pedidos);

    Pedidos.inject = ['$interval'];

    function Pedidos($interval, URL){

        var vm = this;
        // Os produtos devem conter nome, descrição e imagem
        vm.pedidos = [
            {
                id          : 1,
                nome        : "Sony Xperia Z3",
                descricao   : "Celular da Sony, com camera poderosa.",
                imagem      : "image/celular.jpg",
            },
            {
                id          : 2,
                nome        : "Sony Xperia Z5",
                descricao   : "Celular da Sony, com camera poderosa.",
                imagem      : "image/celular.jpg",
            },
            {
                id          : 3,
                nome        : "Moto G3",
                descricao   : "Celular da motorola.",
                imagem      : "image/celular.jpg",
            },
            {
                id          : 4,
                nome        : "Nokia Boladão",
                descricao   : "Celular mais forte que a Terra.",
                imagem      : "image/celular.jpg",
            },
            {
                id          : 5,
                nome        : "Sony Xperia Z3",
                descricao   : "Celular da Sony, com camera poderosa.",
                imagem      : "image/celular.jpg",
            },
            {
                id          : 6,
                nome        : "Sony Xperia Z3",
                descricao   : "Celular da Sony, com camera poderosa.",
                imagem      : "image/celular.jpg",
            },
        ];

        vm.addPedido = function( pedido ) {

            if(pedido == undefined || pedido.nome == "" && pedido.descricao == ""){
                $('.message').html("<p style='color:red'>Preenchar todos os Campos</p>");
                return false;
            }

            let novoPedido = {
                id      : (vm.pedidos[vm.pedidos.length - 1].id) + 1,
                nome    : pedido.nome,
                descricao    : pedido.descricao,
                imagem  : "image/no-image.png",
            }

            vm.pedidos.push(novoPedido);
            $('.modal').modal('hide');
            $('input').val('');
            $('.message').html('');

            pedido = {};
        };

        vm.deletaPedido = function( pedido_id ) {
            
            // let novosPedidos = vm.pedidos.filter( function (pedido){
            //     if(pedido.id != pedido_id) return pedido;
            // });
            let novosPedidos = [];

            vm.pedidos.map((value, key) => {
                if(value.id == pedido_id){
                    delete vm.pedidos[key];
                } else{
                    novosPedidos.push(value);
                }
            })
            vm.pedidos = novosPedidos;
        };
    }     


})();