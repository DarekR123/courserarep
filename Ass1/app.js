(function(){
'use strict';
	
angular.module('ass1App',[])
.controller('ass1Controller', ass1ControllerFunction);
	
ass1ControllerFunction.$inject = ['$scope'];
function ass1ControllerFunction($scope){
	
	$scope.list = "";
	$scope.message = "";
	
	$scope.btnCheck = function(){
		
		var il = 0;
		il = countIt($scope.list);
		
		//$scope.message = il + ' is too much';
		
		if (il > 3) {
			$scope.message = il + ' is too much';
			$scope.btnclass = 'btn btn-warning';
		}
		else {
			$scope.message = 'is not too much, Enjoy !';
			$scope.btnclass = 'btn btn-primary';
		}
	}
	
	function countIt(str){
		
		var words = str.split(',');
		var i;
		var ilosc = 0;
		for (i = 0; i < words.length; i++) {
			if (words[i].trim() != '') {
			ilosc +=1;
			}
		}
		
		return ilosc;
		
	}
	
}
	
	
})()