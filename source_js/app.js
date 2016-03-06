var app = angular.module('mp3',['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/details/:movieRank', {
        templateUrl: '../partials/details.html',
        controller: 'DetailsCtrl',
      })
      .when('/gallery', {
        templateUrl: '../partials/gallery.html',
        controller: 'GalleryCtrl',
        // controllerAs: 'base'
      })
      .when('/list', {
        templateUrl: '../partials/list.html',
        controller: 'ListCtrl',
        // controllerAs: 'base'
      })
      .otherwise({
        redirectTo: '/gallery'
      });
})
