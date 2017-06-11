usersApp.factory('usersRepository', ['$resource', function ($resource) {
    var basePath = 'https://jsonplaceholder.typicode.com/';
    return $resource(basePath + ':command/:Id', {
    }, {
        getUsers: {
            method: 'GET',
            params: {
                command: 'users'
            },
            data: {

            },
            isArray: true
        },
        getUser: {
            method: 'GET',
            params: {
                command: 'users',
                Id: '@Id'
            },
            isArray: false
        },
        addUser: {
            method: 'POST',
            params: {
                command: 'users'
            },
            isArray: false,
            data: {

            }
        }
    })
}]);
usersApp.service('usersService', ['usersRepository', function (usersRepository) {


    var _this = this;
    var users = [];

    users = [];

    _this.getUsers = function (callback, noChace) {
        if (users[0] == undefined || noChace == true) {
            usersRepository.getUsers(
                function (data) {
                    users = data;
                    if (callback != undefined)
                        callback(users);
                });
        } else if (callback != undefined)
            callback(users);
    };

    _this.getUser = function (id, callback) {
        usersRepository.getUser({
            Id: id
        },
            function (data) {
                if (callback != undefined)
                    callback(data);
            });
    };


    _this.addUser = function (user, callback) {
        usersRepository.addUser({},
            user,
            function (data) {
                updateUsersList(data, callback);
            });
    };

    var updateUsersList = function (data, callback) {
        var userIndex = users.findIndex(function (t) {
            return t.id == data.id
        });
        if (userIndex != -1)
            users[userIndex] = data;
        else
            users.push(data);

        if (callback != undefined)
            callback(data);
    };
}]);