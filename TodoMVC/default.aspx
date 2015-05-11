<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="TodoMVC._default" %>
<%@ Import Namespace="System.Web.Optimization" %>

<!DOCTYPE html>

<html ng-app="todomvc" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
  <title>Typescript & AngularJS - TodoMVC</title>
  <link rel="stylesheet" href="~/styles/base.css" />
  <link rel="stylesheet" href="~/styles/index.css" />
  <style>[ng-cloak] {display: none;}</style>
</head>
<body>
  <section id="todoapp" ng-controller="todoCtrl">
    <header id="header">
      <h1>todos</h1>
      <form id="todoform" runat="server" ng-submit="vm.addTodo($event)">
        <input id="new-todo" placeholder="What needs to be done?" ng-model="newTodo" />
      </form>
    </header>
    <section id="main" ng-show="todos.length" ng-cloak>
      <input id="toggle-all" type="checkbox" ng-model="allChecked" ng-click="vm.markAll(!allChecked)" />
      <label for="toggle-all">Mark all as complete</label>
      <ul id="todo-list">
        <li ng-repeat="todo in todos | filter:statusFilter track by $index" ng-class="{completed: todo.completed, editing: todo == editedTodo}">
          <div class="view">
            <input class="toggle" type="checkbox" ng-model="todo.completed" />
            <label ng-dbclick="mv.editTodo(todo)">{{todo.title}}</label>
            <button class="destroy" ng-click="vm.removeTodo(todo)"></button>
          </div>
        </li>
      </ul>
    </section>
    <footer id="footer" ng-show="todos.length" ng-cloak>
				<span id="todo-count"><strong>{{remainingCount}}</strong>
					<ng-pluralize count="remainingCount" when="{ one: 'item left', other: 'items left' }"></ng-pluralize>
				</span>
				<ul id="filters">
					<li>
						<a ng-class="{selected: location.path() == '/'} " href="#/">All</a>
					</li>
					<li>
						<a ng-class="{selected: location.path() == '/active'}" href="#/active">Active</a>
					</li>
					<li>
						<a ng-class="{selected: location.path() == '/completed'}" href="#/completed">Completed</a>
					</li>
				</ul>
				<button id="clear-completed" ng-click="vm.clearDoneTodos()" ng-show="doneCount">Clear completed</button>
			</footer>
  </section>

  <footer id="info">
			<p>Double-click to edit a todo</p>
			<p>Credits:
					<a href="http://twitter.com/cburgdorf">Christoph Burgdorf</a>,
					<a href="http://ericbidelman.com">Eric Bidelman</a>,
					<a href="http://jacobmumm.com">Jacob Mumm</a>
					<a href="http://igorminar.com">Igor Minar</a> and
					<a href="http://zamboch.blogspot.com">Pavel Savara</a>
			 </p>
		</footer>
  
    <%: Scripts.Render("~/bundles/angular") %>
    <%: Scripts.Render("~/bundles/app") %>
		
</body>
</html>
