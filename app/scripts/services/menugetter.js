'use strict';

/**
 * @ngdoc service
 * @name ichabodngApp.menuGetter
 * @description
 * # menuGetter
 * Factory in the ichabodngApp.
 */
angular.module('ichabodngApp')
  .factory('menuGetter', function () {
    // Public API here
    return {
      navigationMenu: [
        {
          title: 'About',
          href: '#',
        },
        {
          title: 'Resources',
          href: '#',
        },
        {
          title: 'Issues',
          href: '#',
          submenu: [
            {
              title: 'Emergencies',
              href: '#'
            },
            {
              title: 'Hunger',
              href: '#'
            },
            {
              title: 'Health',
              href: '#'
            },
          ]
        },
        {
          title: 'Solidarity',
          href: '#',
        },
        {
          title: 'Core Programs',
          href: '#',
          submenu: [
            {
              title: 'Food Fast',
              href: '#'
            },
            {
              title: 'Global High School',
              href: '#'
            },
            {
              title: 'Other CRS Programs',
              href: '#'
            },
          ]
        },
      ]
    };
  });
