'use strict';

/**
 * @ngdoc directive
 * @name ichabodngApp.directive:masthead
 * @description
 * # masthead
 */
angular.module('ichabodngApp')
  .directive('masthead', function () {
    return {
      restrict: 'E',
      templateUrl: '/templates/masthead.html'
    };
  });
