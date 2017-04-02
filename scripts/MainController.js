app.controller('MainController', ['$scope', function($scope) {
    $scope.timestamp = Date();
    $scope.smallnumber = 0;
    $scope.theMessage = "";
    $scope.checkNumber = function(){
         if (isNaN($scope.smallnumber) || $scope.smallnumber <1 || $scope.smallnumber >10){
        $scope.theMessage = "numver was expecged to be between 1 and 10";
        } else{
            $scope.theMessage = "number is good";
        }
    }

    
}]);