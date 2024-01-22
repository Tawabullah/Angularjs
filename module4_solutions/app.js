(function () {
    'use strict';
  
    var restaurantApp = angular.module('restaurantApp', ['ngRoute']);

    restaurantApp.config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'home.html',
          controller: 'HomeController'
        })
        .when('/categories', {
          templateUrl: 'categories.html',
          controller: 'CategoriesController'
        })
        .when('/items/:category', {
          templateUrl: 'items.html',
          controller: 'ItemsController'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
    restaurantApp.controller('HomeController', function ($scope) {
      // Controller logic for home view
    });

    restaurantApp.controller('CategoriesController', function ($scope, $http) {
      $http.get('https://api.restaurant.com/categories')
        .then(function (response) {
          $scope.categories = response.data;
        });

      // Controller logic for categories view
    });

    restaurantApp.controller('ItemsController', function ($scope, $http, $routeParams) {
      var category = $routeParams.category;
      $http.get('https://api.restaurant.com/items?category=' + category)
        .then(function (response) {
          $scope.items = response.data;
        });

      // Controller logic for items view
    });
  
  })();