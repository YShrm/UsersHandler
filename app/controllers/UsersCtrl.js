
usersApp.controller('usersController', ['$scope', 'usersService',function ($scope, usersService) {
    $scope.users = [];

    $scope.getUsers = function () {
        usersService.getUsers(function (data) {
            if (data)
                $scope.users = data;
            //onerror
        });
    };

    $scope.getUsers();
}]);
