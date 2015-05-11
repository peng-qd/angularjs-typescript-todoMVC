///<reference path='_all.ts'/>

module todos {
    'use strict';

    var todomvc = angular.module('todomvc', [])
        .controller('todoCtrl', TodoCtrl)
        .service('todoStorage', TodoStorage);
} 