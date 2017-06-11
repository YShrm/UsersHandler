usersApp.controller('userController', ['$scope', '$routeParams', 'usersService', '$location', function ($scope, $routeParams, usersService, $location) {
    var userId = $routeParams.userid;
    $scope.user = {
        "id": userId,
        "name": "",
        "username": "",
        "email": "",
        "address": {
            "street": "",
            "suite": "",
            "city": "",
            "zipcode": "",
            "geo": {
                "lat": "",
                "lng": ""
            }
        },
        "phone": "",
        "website": "",
        "company": {
            "name": "",
            "catchPhrase": "",
            "bs": ""
        }
    };

    $scope.GetUser = function () {
        if (userId) {
            usersService.getUser(userId, function (data) {
                $scope.user = data;
            });
        }
    };

    $scope.AddUser = function () {
        if (!userId) {
            usersService.addUser($scope.user);
            $location.url('/');
        }
    };

    $scope.GetUser();
}]);
