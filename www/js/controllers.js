angular.module('ionicApp')

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate, localStorageService) {

  /*$scope.tasks = [
      { name : 'T1', executionDate : '2014-10-12', recurrent : 'true', daysFrequency : '30' },
      { name : 'T4', executionDate : '2014-05-30', recurrent : 'true', daysFrequency : '10' },
      { name : 'T23', executionDate : '2014-08-12', recurrent : 'false' }
  ];*/

  $scope.tasks = localStorageService.get('tasks');
        if ( $scope.tasks === null) {
            $scope.tasks = [];
        }

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('NewTaskCtrl', function($scope, localStorageService) {
    $scope.showForm = true;
    $scope.task = {};
    $scope.submit = function() {
        if(!$scope.task.name) {
            alert('Name required');
            return;
        }
        if(!$scope.task.executionDate) {
            alert('Date required');
            return;
        }
        if(!$scope.task.recurrent) {
            $scope.task.recurrent = 'false';
        }
        $scope.showForm = false;

        //$scope.tasks.push($scope.task);
        $scope.tasks.push($scope.task);
        localStorageService.set('tasks',$scope.tasks);
    };

})
.controller('TasksCtrl', function($scope, localStorageService) {

    $scope.activity = [];
    $scope.taskAdded = function(task) {
        var msg = task.name;
        msg += ' has benn added';
        msg += new Date().getMilliseconds();
        $scope.activity.push(msg);
        if($scope.activity.length > 3) {
            $scope.activity.splice(0, 1);
        }
    };

});