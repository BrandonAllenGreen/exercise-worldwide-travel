"use strict";

angular
  .module("WorldTravel")
  .controller("BookCtrl", function($scope, BookFactory) {
    BookFactory.getGuides()
    .then( (data) => {
      $scope.books = data.data.guides;
    });
  });
      


