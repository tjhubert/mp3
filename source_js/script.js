// Write any custom javascript functions here
function tryLoadData($scope, $http, callback){
    if (!$scope.movies){
        $http.get('/data/imdb250.json').
          success(function(data) {
            $scope.movies = data;
            if (typeof callback !== 'undefined') {
                callback();
            }
          }).
          error(function(err) {
            console.log(err);
          });
    }
}