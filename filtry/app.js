(function(){
'use strict';
	
angular.module('myApp',[])
.controller('firstController', funFContr)
.controller('secondController', funSContr)
.filter('myF',filtDefFun); //wstrzykiwać jako nazwa+Filter
	
//funFContr.inject = ['$scope','myFFilter']
//function funFContr($scope, myFFilter)
funFContr.inject = ['myFFilter']
function funFContr(myFFilter) //scope niepotrzebny i nie wstrzykujemy jeśli jest var xxx = this
	{
		
//		$scope.name = 'Darek';
//		
//		$scope.newname = myFFilter($scope.name,'a','b');
		
		var fCon = this;   //może być taka sama nazwa jak w html
		fCon.name = 'Darek';
		
//		fCon.newname = myFFilter($scope.name,'a','b');	
		
		fCon.newname = myFFilter(fCon.name,'a','b');
		
	}
	
//funSContr.inject = ['$scope'];
function funSContr()
	{
	var VM = this;    // dowolna nazwa, bo to zwykłazmienna,
										//	ale może być tak jak w nick 
										// kontrolera w html
	VM.name = "paweł1";
	
	}


//filter factory function zwraca funkcję....
function filtDefFun(){
	
	return function (napis, source, dest){
		var zamien = '';
		zamien = napis.replace(source, dest);
		return zamien;
	}
	
}	
	
})();