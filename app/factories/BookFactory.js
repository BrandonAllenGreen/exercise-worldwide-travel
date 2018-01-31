"use strict";

angular.module("WorldTravel").factory("BookFactory", ($q, $http) => {
  function getGuides() {
    return $q((resolve, reject) => {
      $http
        .get("../data/guides.json")
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  return { getGuides };
});
