// (function(){
//     angular.module('myApp',[]).controller('MyController',MyController);

//     function MyController($scope){
//         $scope.name="Tawabullah";
//     }
// })();
(
    function () {
        angular.module('ShoppingListApp', [])
            .service('ShoppingListService', function () {
                var service = this;

                service.toBuyList = [
                    { name: 'cookies', quantity: 10 },
                    { name: 'apples', quantity: 5 },
                    { name: 'milk', quantity: 2 },
                    { name: 'bread', quantity: 3 },
                    { name: 'eggs', quantity: 12 }
                ];

                service.alreadyBoughtList = [];
            })
            .controller('ToBuyController', function ($scope, ShoppingListService) {
                $scope.toBuyList = ShoppingListService.toBuyList;

                $scope.buyItem = function (index) {
                    var boughtItem = $scope.toBuyList.splice(index, 1)[0];
                    ShoppingListService.alreadyBoughtList.push(boughtItem);
                    if ($scope.toBuyList.length === 0) {
                        $scope.showEverythingBoughtMessage = true;
                    }
                };
            })
            .controller('AlreadyBoughtController', function ($scope, ShoppingListService) {
                $scope.alreadyBoughtList = ShoppingListService.alreadyBoughtList;
                $scope.showEverythingBoughtMessage = false;
            });
    }
)();