/// <reference path='../_all.ts' />

module todos {
    'use strict';

    export class TodoCtrl {
        private todos: TodoItem[];

        public static $inject = ['$scope', '$location', 'todoStorage', 'filterFilter'];

        constructor(
            private $scope: ITodoScope,
            private $location: ng.ILocationService,
            private todoStorage: ITodoStorage,
            private filterFilter
        ) {
            this.todos = $scope.todos = todoStorage.get();
            console.log(this.todos.length);

            $scope.newTodo = '';
            $scope.editedTodo = null;

            $scope.vm = this;

            $scope.$watch('todos', () => this.onTodos(), true);
            $scope.$watch('location.path()', path => this.onPath(path));

            if ($location.path() === '') $location.path('/');
            $scope.location = $location;
        }

        onPath(path: string) {
            this.$scope.statusFilter = (path === '/active') ?
            { completed: false } : (path === '/completed') ?
            { completed: true } : undefined;
        }

        onTodos() {
            this.$scope.remainingCount = this.filterFilter(this.todos, { completed: false }).length;
            this.$scope.doneCount = this.todos.length - this.$scope.remainingCount;
            this.$scope.allChecked = !this.$scope.remainingCount;
            this.todoStorage.put(this.todos);
        }

        addTodo(event) {
            event.preventDefault();

            var newTodo: string = this.$scope.newTodo.trim();
            if (!newTodo.length)
                return;

            this.todos.push(new TodoItem(newTodo, false));
            this.$scope.newTodo = '';
        }

        markAll(completed: boolean) {
            this.todos.forEach(todoItem => { todoItem.completed = completed; });
        }

        editTodo(todoItem: TodoItem) {
            this.$scope.editedTodo = todoItem;
        }

        removeTodo(todoItem: TodoItem) {
            this.todos.splice(this.todos.indexOf(todoItem), 1);
        }

        clearDoneTodos() {
            this.$scope.todos = this.todos = this.todos.filter(todoItem => !todoItem.completed);
        }
    }
} 