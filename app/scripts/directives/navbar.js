'use strict';

/**
 * @ngdoc directive
 * @name ichabodngApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('ichabodngApp')
  .directive('navbar', function (menuGetter) {
    return {
      restrict: 'E',
      templateUrl: '/templates/navbar.html',
      scope: {},
      link: function(scope, element) {
        scope.mainMenu = menuGetter.navigationMenu;
        scope.subSelected = null;

        scope.menuToggle = function(menuIndex) {
          scope.subSelected = menuIndex;
        }
        scope.menuHide = function() {
          scope.subSelected = null;
        }
      }
    };
  });
