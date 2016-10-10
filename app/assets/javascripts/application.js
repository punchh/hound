//= require angular
//= require angular-resource
//= require lodash
//= require namespaced
//= require_self
//= require react
//= require react_ujs
//= require components
//= require_tree .

App = angular.module('Hound', ['ngResource']);

App.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);
