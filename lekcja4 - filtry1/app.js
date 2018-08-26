(function(){
'use strict'

angular.module('myApp',[])
.controller('myContr', myContrFun)
.filter('myCustomF', FilterFactoryFun);  //(2) rejestracja factory

myContrFun.inject = ['$scope', 'myCustomFFilter']; //(3) wstrzyknięcie
function myContrFun($scope, myCustomFFilter){      // i tu + "Filter"

  $scope.fname = "Darek";
  $scope.lname = "R";
  $scope.Lname = "r";
  $scope.message = "To jest jakiś tekst";
  $scope.message2 = "";

  $scope.rep = function(){  //(4) wywołanie filtra - nazwa + Filter
    $scope.message3 = myCustomFFilter($scope.message2, 'dd', 'DD')
  };

}

function FilterFactoryFun(){           //(1) deklaracja funkcji typu factory
  return function(tresc,par1,par2){    //poza kontrolerem,

    return tresc.replace(par1,par2);   //która zwraca funkcje :-)
  }
}

})()



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

//var app = angular.module('myApp',[]);
//'use strict'

// funkcja jako część kontroleta

// app.controller('myContr', function($scope){
//   $scope.lname = "Darek";
// });

// funkcja fcon jest jako oddzielna funkcja kontrolera

// app.controller('myContr', fcon);
// function fcon($scope){
//   $scope.fname="Darek";
//   $scope.lname="R";
//   $scope.Lname="r";
// }
