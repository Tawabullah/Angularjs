(function () {
  "use strict";

  angular.module("public").controller("SignupController", SignupController);

  SignupController.$inject = [ "UserInfoService", "$location"];
  function SignupController( UserInfoService, $location) {
    var $ctrl = this;
    $ctrl.userInfo = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      favoriteDish: "",
      favoriteDishObj: {},
      registered: false,
    };

    $ctrl.errorMsg = "";

    $ctrl.savedUserInfo = UserInfoService.getUserInfo();

    $ctrl.submitForm = function () {
      UserInfoService.getFavoriteDish($ctrl.userInfo.favoriteDish)
        .then((res) => {
          if (res) {
            $ctrl.userInfo.favoriteDishObj = res;
            $ctrl.userInfo.registered = true;
            $location.path('userInfo')
          }
          $ctrl.errorMsg = "No such menu number exists";
        })
        .catch((err) => {
          $ctrl.errorMsg = "Unexpected Error while fetching your favorite Dish";
          console.log(err, "err");
        });
      UserInfoService.saveUserData($ctrl.userInfo);
    };
  }
})();
