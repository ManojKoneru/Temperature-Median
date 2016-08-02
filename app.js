var myApp = angular.module('myApp',[]);


myApp.controller('mainController',['$scope',function($scope){
  
   $scope.list = [];
    $scope.sum = 0;
    
  
  $scope.recordTemperature = function(temp){
    $scope.list.push(parseInt(temp));
      
      $scope.newTemperature='';
      console.log($scope.list);
     
      
  } 
  
   
  $scope.getCurrentMedian = function(){
      
     var k = $scope.list.sort(function(a, b){
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    else
        return 0;
});
    
      
      console.log(k);
      
//      $scope.sortedList = $scope.list.sort();
//      console.log($scope.sortedList)
     
      if(k.length % 2 !== 0 ){
          var middle = (k.length+1) / 2 ;

          $scope.median = k[middle-1];
      }else if(k.length % 2 === 0) {

           var middle = (k.length) / 2 ;
           var middle2 = (k.length+2) /2;
          $scope.median = (parseInt(k[middle-1])+parseInt(k[middle2-1]))/2;
          
      }

  }
  
}]);
