'use strict'

angular.module('foundangular', [])

// Alert component
.directive('zfAlert', function(){
  return {
    restrict: "E",
    replace: true,
    transclude: true,
    scope: {
      closeText: "@",
      noClose: "@"
    },
    controller: function($scope) {
      $scope.remove = function() {
        $scope.element.remove();
      }
    },
    template: '<div class="alert-box"><span ng-transclude></span><a ng-hide="hideClose" class="close" ng-click="remove()">{{ closeText || "&times;" }}</a></div>',
    link: function(scope, element, attrs) {
      element.addClass(attrs.class);
      scope.element = element;
      scope.hideClose = "noClose" in attrs;
    }
  }
})

.directive('alert', function(){
  return {
    restrict: "A",
    replace: true,
    transclude: true,
    scope: {
      closeText: "@",
      noClose: "@"
    },
    controller: function($scope) {
      $scope.remove = function() {
        $scope.element.remove();
      }
    },
    template: '<div class="alert-box"><span ng-transclude></span><a ng-hide="hideClose" class="close" ng-click="remove()">{{ closeText || "&times;" }}</a></div>',
    link: function(scope, element, attrs) {
      element.addClass(attrs.class);
      scope.element = element;
      scope.hideClose = "noClose" in attrs;
    }
  }
})


// Dropdown component
.factory('DropdownData', [function(){
  return {elements: {}}
}])

.directive('dropdown', function(){
  return {
    restrict: "A",
    scope: {
      dropdown: '@'
    },

    controller: ['$scope', 'DropdownData', function($scope, DropdownData) {
      DropdownData[$scope.dropdown] = {
        activeClass: 'open',
        is_hover: false
      }
      $scope.data = DropdownData[$scope.dropdown];
      $scope.open = function (dropdown, target) {
        // Add code to display dropdown
      }
      $scope.close = function (dropdown) {
        // Add code to hide dropdown
      }
    }],

    link: function(scope, element) {
      scope.data.triggerElement = element;
      element.bind('click', function(e) {
        scope.open(scope.data.contentElement, scope.data.triggerElement);
      });
    }
  }
})

.directive('dropdownContent', function(){
  return {
    scope: {
      id: '@'
    },
    controller: ['$scope', 'DropdownData', function($scope, DropdownData){
      $scope.data = DropdownData[$scope.id];
    }],
    link: function(scope, element) {
      scope.data.contentElement = element;
    }
  }
})