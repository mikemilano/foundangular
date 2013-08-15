'use strict'

angular.module('foundangular', []).
directive('alert', function(){
  return {
    restrict: "EA",
    replace: true,
    transclude: true,
    scope: {
      closeText: "@",
      noClose: "@"
    },
    controller: function($scope) {
      console.log(angular.isDefined($scope.noClose));
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
});