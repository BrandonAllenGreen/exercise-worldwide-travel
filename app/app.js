"use strict";

angular.module("WorldTravel", ["ngRoute"])
  .config($routeProvider => {
    $routeProvider
    .when("/", {
      templateUrl: "partials/travel-list.html",
      controller: "BookCtrl"
    });
  });
