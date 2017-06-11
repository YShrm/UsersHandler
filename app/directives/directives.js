usersApp.directive('userRow', function () {
    return {
        restrict: 'AEC',
        replace: true,
        scope: {
            user: '=data'
        },
        templateUrl: 'directives/templates/userRow.html'
    };
})
.directive('userDetails', function () {
    return {
        restrict: 'AEC',
        scope: {
            user: '=data'
        },
        templateUrl: 'directives/templates/userDetails.html'
    };
})
.directive('suchHref', ['$location', function ($location) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.attr('style', 'cursor:pointer');
            element.on('click', function () {
                $location.url(attr.suchHref)
                scope.$apply();
            });
        }
    }
}]);