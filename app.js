(function(){
'use strict';

angular.module("myFirstapp",[])

.controller("myFirstcontroller",function($scope){

  $scope.name="Darek";
  $scope.surname = function(){
    return "Adam"+$scope.name;
  }

});




})()
