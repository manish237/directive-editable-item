var app = angular.module('myApp', []);

/*
app.controller('myCtrl',['$scope',function ($scope) {
    console.log('myCtrl');
    $scope.editable=false;
}])
*/

app.directive('makeEditable', function() {
    return {
        restrict: 'A',
        transclude: true,
        templateUrl: "./signup.html",
        scope: true,
        link: function(scope, element, attrs) {
            scope.editable = false;
        }
    }
});
