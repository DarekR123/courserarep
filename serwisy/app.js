(function () {
	'use strict';

	angular.module('myApp', [])
		.controller('firstController', fContrFun)
		.controller('listController', lContrFun)
		.service('myService', addService);

	fContrFun.$inject = ['myService']; //wstrzyknięcie do funkcji musi być $ przed inject
	function fContrFun(myService) { //pierwszy kontr
		var VM = this; // do kontr. as a syntax
		VM.myname = 'Darek';
		VM.name = '';
		VM.quantity = '';

		VM.addButton = function () {

			myService.addPos(VM.name, VM.quantity);
			VM.name = '';
			VM.quantity = '';

		};

	}

	lContrFun.$inject = ['myService']; //wstrzykn. do funkcji
	function lContrFun(myService) {
		var VM = this;

		VM.litems = myService.getItems(); //tablica odbiera dane

		VM.delButton = function (pos) {
			myService.delPos(pos);
		}


	}

	//serwis
	function addService() {
		var serv = this;

		var items = []; //tablica lokalna należy do serwisu

		serv.delPos = function (localpos) {
			items.splice(localpos, 1);
		}

		serv.addPos = function (nam, quant) {
			var item = {
				name: nam,
				quantity: quant
			};
			items.push(item);

		}

		serv.getItems = function () { //wyrzuca tablicę do kontrol
			return items;
		}


	}

})();