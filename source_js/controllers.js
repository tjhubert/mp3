app.controller('DetailsCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
    tryLoadData($scope, $http);
    $scope.movieRank = parseInt($routeParams.movieRank, 10);
}])

app.controller('GalleryCtrl', ['$scope', '$http', function($scope, $http){
    tryLoadData($scope, $http, function(){
        var genreFilters = $scope.movies.map(function(elem){return elem.genre});
        genreFilters = [].concat.apply([], genreFilters);
        $scope.genreFilters = [];
        genreFilters.forEach(function(genre) {
            if ($scope.genreFilters.indexOf(genre) === -1) {
                $scope.genreFilters.push(genre);
            }
        });
        $scope.genreFilters.sort();
        $scope.genreFilters.unshift("All");

    });

    $scope.applyFilter = function(genreFilter) {
        if (genreFilter !== "All") {
            $scope.appliedGenreFilter = genreFilter;
        }
        else {
            $scope.appliedGenreFilter = "";
        }
    }
}]);

app.controller('ListCtrl', ['$scope', '$http', function($scope, $http){
    tryLoadData($scope, $http);
    $scope.listFilter = function(movie){
        var query;
        if ($scope.searchQuery && $scope.searchQuery.length > 0) {
            query = $scope.searchQuery.toLowerCase();
            return movie.title.toLowerCase().indexOf(query) > -1 ||
                movie.plot.toLowerCase().indexOf(query) > -1 ||
                movie.genre.join(" ").toLowerCase().indexOf(query) > -1 ||
                movie.director.join(" ").toLowerCase().indexOf(query) > -1 ||
                movie.actors.join(" ").toLowerCase().indexOf(query) > -1;
        }
        else {
            return false;
        }
    }
}]);