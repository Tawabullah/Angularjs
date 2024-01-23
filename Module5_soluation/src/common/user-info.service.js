(function () {
  "use strict";

  angular.module("common")
  .service("UserInfoService", UserInfoService);

  UserInfoService.$inject = ['$http', 'ApiPath', '$filter']

  function UserInfoService($http, ApiPath, $filter){
    var service = this 
    service.userInfo = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        favoriteDash: '',
        registered: false
      };
      

    service.saveUserData = function(data){
        service.userInfo = data;
    }

    service.getUserInfo = function(){
      console.log(service.userInfo);
        return service.userInfo;
    }


    service.getFavoriteDish = function (menu_shortname) {
      var menu_number = menu_shortname.match(/\d+/g)-1;
      var category = menu_shortname.match(/[a-zA-Z]+/g);
      console.log(category);
      return $http.get(ApiPath +`/menu_items/${category}/menu_items/${menu_number}.json`).then(function (response) {
        return response.data;
      });
    };
  }
})();
