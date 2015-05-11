/// <reference path='../_all.ts' />
var todos;
(function (todos) {
    'use strict';
    var TodoCtrl = (function () {
        function TodoCtrl($scope, $location, todoStorage) {
            this.$scope = $scope;
            this.$location = $location;
            this.todoStorage = todoStorage;
        }
        TodoCtrl.$inject = ['$scope', '$location', 'todoStorage'];
        return TodoCtrl;
    })();
    todos.TodoCtrl = TodoCtrl;
})(todos || (todos = {}));
//# sourceMappingURL=TodoCtrl.js.map