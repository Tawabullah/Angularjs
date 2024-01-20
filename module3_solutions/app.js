(function () {
    'use strict';
  
    angular.module('MenuApp', [])
      .controller('NarrowItDownController', NarrowItDownController)
      .service('MenuSearchService', MenuSearchService)
      .constant('ApiBasePath', ''); // Empty string for local JSON file
  
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
      var narrowCtrl = this;
  
      narrowCtrl.searchTerm = '';
      narrowCtrl.foundItems = [];
      narrowCtrl.showResults = false;
  
      narrowCtrl.narrowItDown = function () {
        if (narrowCtrl.searchTerm.trim() === '') {
          narrowCtrl.foundItems = [];
          narrowCtrl.showResults = true;
          return;
        }
  
        MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm)
          .then(function (foundItems) {
            narrowCtrl.foundItems = foundItems;
            narrowCtrl.showResults = true;
          });
      };
  
      narrowCtrl.removeItem = function (index) {
        narrowCtrl.foundItems.splice(index, 1);
      };
    }
  
    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
      var service = this;
  
      service.getMatchedMenuItems = function (searchTerm) {
        return $http({
          method: 'GET',
          url: './menu_items.json' // Local JSON file
        }).then(function (response) {
          var menuItems = response.data.menu_items;
          var foundItems = [];
  
          for (var i = 0; i < menuItems.length; i++) {
            if (menuItems[i].description.indexOf(searchTerm) !== -1) {
              foundItems.push(menuItems[i]);
            }
          }
  
          return foundItems;
        });
      };
    }
  
  })();