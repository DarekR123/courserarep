// (function(){
// 'use strict'       //to warto ustawić
//
// angular.module('myApp',[])
// .controller('myController', fmyContr);
//
// fmyContr.inject = ['$scope'];  //tu ma być nazwa funkcji, a nie kontrolera
// function fmyContr($scope){     // $scope tu i tu
//
// $scope.fname = "Darek";
// $scope.lname = "";
// $scope.Lname = "";
//
// $scope.click = function(){   //funkcja na $scope do łączenia z html
//   $scope.Lname = $scope.lname.toUpperCase();
// }
//
// }
//
//
// })()

//moduł jako app, ale myApp jako ng-app w html

var app = angular.module('myApp',[]);
'use strict'

// funkcja jako część kontroleta

// app.controller('myContr', function($scope){
//   $scope.lname = "Darek";
// });

// funkcja fcon jest jako oddzielna funkcja kontrolera

app.controller('myContr', fcon);
function fcon($scope){
  $scope.fname="Darek";
  $scope.lname="R";
  $scope.Lname="r";
}
