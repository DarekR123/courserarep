(function(){
'use strict'       //to warto ustawić

angular.module('myApp',[])
.controller('myController', fmyContr);

fmyContr.inject = ['$scope'];  //tu ma być nazwa funkcji, a nie kontrolera
function fmyContr($scope){     // $scope tu i tu

$scope.fname = "Darek";
$scope.lname = "";
$scope.Lname = "";

$scope.click = function(){   //funkcja na $scope do łączenia z html
  $scope.Lname = $scope.lname.toUpperCase();
}

}


})()
