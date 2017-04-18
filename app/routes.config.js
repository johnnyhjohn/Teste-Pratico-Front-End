﻿/**
*   @author Johnny John
*
*   Modelo de arquivo de rota criado por mim seguindo
*   o modelo de John Papa de boas práticas.
*/
(function(){
	'use strict';
  
	/**
	*
	* Configuração de Rotas do Angular definidas no modulo fronEndApp
	*
	*/

	angular.module('fronEndApp').config(routeConfig);


    /**
    *
    * Injeção de dependências para a função RouteConfig
    * $routeProvider é usado para gerenciar a configuração de rotas do Angular
    * $locationProvider para configurar o como a aplicação irá lidar com as URL's
    */    
    routeConfig.$inject = ['$routeProvider','$locationProvider', 'URL'];

    function routeConfig($routeProvider, $locationProvider, URL) {
        /**
    	*
    	* Usamos o $locationProvider.html5Mode(true) juntamente com a tag <base href=''>
    	* Na head do documento, para transformar as url em "URL Amigaveis"
    	* Retirando o '#' da URL padrão com as rotas do Angular
    	*/

	  	$locationProvider.html5Mode(true);

	  	/**
		*
	  	* routeProvider usa a Função WHEN, que indica o "quando" será tal rota
	  	* no caso when('/') será quando a rota for apenas '/', podendo passar
	  	* parâmetros para as rotas também, basta colocar '/:nome_do_parâmetro',
	  	* e então se passa as configurações:
	  	*
	  	* templateUrl : O arquivo de template que deseja que carregue naquela rota
	  	* controller  : O controller que será carregado naquela view          (opcionais)
	  	* controllerAs: O apelido dado ao controller para as chamadas na view (opcionais)
	  	* 
	  	* Otherwise é para quando a rota não entra em nenhuma das condições situadas no "WHEN"
	  	* Então podemos usar um redirectTo e a rota, ou fazer um templateUrl com uma page 404
	  	*
	  	* A pratica de renome do controller é para ele não sobrescrever o $scope ou this 
	  	* usando apenas o $scope e ou this.
	  	* Com muitos controllers em página é necessario isto, pois se não o controller sobrescreve
	  	* O $scope e o this
	  	*/

	  	//	Invoca a funcão configuraRota com o Array de rotas para montar elas
      	configuraRota(getRoutes());

      	/*
      	*	 @description
      	* 	 Método que roda um loop no array de rotas e monta a estrutura automaticamente
      	*  	 De acordo com os valores dos objetos dentro do array
      	*
      	* 	 @param {Array} route
      	*	 @return {Route} configuraRota
      	*/
      	function configuraRota(route){
          
      		route.forEach(function(value, key){
      			$routeProvider.when(value.url, value.config);
      		});
      		$routeProvider.otherwise({ redirectTo: '/' });
      	}

      	/**
      	*  @description
      	*  Método que monta o objeto de configuração da rota,
      	*  Montando a url, e as config caso os parametros de template
      	*  E controller não estejam nulos
      	*
      	*  @param  {String} url        - Caminho da rota
      	*  @param  {String} template   - Link da partial
      	*  @param  {String} controller - Nome do Controller
      	*  @return {Object} rota
      	*/
      	function montaRota(url, template, controller){
      		let rota = {
      			url : url,
      			config :{
      				templateUrl : URL.partials + template
      			}
      		}
      		
      		if(!template && !controller){
      			rota = {
      				url    : url,
      				config : {}
      			}
      		}

      		if(controller){
      			rota.config.controller   = controller;
      			rota.config.controllerAs = 'vm'
      		}
      		return rota;
      	}

      	/*
      	*  @description
      	*  Método que retorna um Array das rotas, montando elas usando
      	*  o método montaRota()
      	*
      	*	@return {Array} getRoutes
      	*/

      	function getRoutes(){
      		return [
                montaRota('/',        'Pedidos/index.html', 'PedidosCtrl'),
                montaRota('/sobre',   '/Site/sobre.html', 'ImovelCtrl'),
                montaRota('/vendas',  '/Site/vendas.html', 'ImovelCtrl'),
                montaRota('/contato', '/Site/contato.html', 'ImovelCtrl'),
      		]
      	}
    }

})();