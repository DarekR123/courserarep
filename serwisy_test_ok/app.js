(function () {
	'use strict'

	angular.module('myApp', [])
		.controller('firstController', fCFun)
		.controller('secondController', sCFun)
		.service('myService', mySFun);

	fCFun.$inject = ['myService'];

	function fCFun(myService) {
		var VM = this;
		VM.myname = 'Sprawdzam czy dziala';
		VM.name = '';
		VM.quantiry = '';

		VM.addButton = function () {
			myService.addItem(VM.name, VM.quantity);
		};

		VM.items = myService.get();

		VM.buyButton = function (p) {
			myService.buy(p);
		}
	}


	sCFun.$inject = ['myService'];

	function sCFun(myService) {
		var VM = this;
		VM.items = myService.getitemsbought();
		VM.delButton = function (p) {
			myService.del(p);
		}
	}


	function mySFun() {

		var service = this;
		var items = [];
		var itemsbought = [];

		service.buy = function (pos_to_buy) {
			var item = {
				name: "",
				quantity: ""
			};

			item = items[pos_to_buy];

			itemsbought.push(item);
			items.splice(pos_to_buy, 1);
		}

		service.del = function (pos_to_delete) {
			itemsbought.splice(pos_to_delete, 1);
		}

		service.addItem = function (n, q) {
			var item = {
				name: n,
				quantity: q
			};
			items.push(item);
		}

		service.get = function () {
			return items;
		}

		service.getitemsbought = function () {
			return itemsbought;
		}

	}

})()