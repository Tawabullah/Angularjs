(
    function(){
        "use strict";
    
        angular.module('public')
        .controller('UserInfoController', UserInfoController);
        
        UserInfoController.$inject = ['UserInfoService'];
        function UserInfoController(UserInfoService) {
            var $ctrl = this;
            $ctrl.title = 'User Info';

            $ctrl.userInfo = UserInfoService.getUserInfo();

            $ctrl.lettersOnly = function(input = 'L124') {
                return  input.match(/[a-zA-Z]+/g).toString();
            }

            $ctrl.categoryName = $ctrl.lettersOnly($ctrl.userInfo.favoriteDish)
        }
    }
)();