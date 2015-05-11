///<reference path='_all.ts'/>
var todos;
(function (todos) {
    'use strict';
    var todomvc = angular.module('todomvc', [])
        .controller('todoCtrl', todos.TodoCtrl)
        .service('todoStorage', todos.TodoStorage);
})(todos || (todos = {}));
//# sourceMappingURL=Application.js.map