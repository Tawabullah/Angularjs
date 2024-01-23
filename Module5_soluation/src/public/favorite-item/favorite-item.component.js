(function () {
    "use strict";
    
    angular.module('public')
    .component('favorite-item', {
      templateUrl: 'src/public/favorite-item/favorite-item.html',
      bindings: {
        menuItem: '<',
        categoryShortName: '<',
        
      }
    });
    
    })();
    