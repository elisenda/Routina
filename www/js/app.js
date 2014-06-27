/**
 * Created by zfld3287 on 19/06/2014.
 */

angular.module('ionicApp', ['ionic', 'LocalStorageModule'])


.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('eventmenu', {
            url: "/event",
            abstract: true,
            templateUrl: "templates/event-menu.html"
        })
        .state('eventmenu.newtask', {
            url: "/newtask",
            views: {
                'menuContent' :{
                    templateUrl: "templates/newTask.html",
                    controller: "NewTaskCtrl"
                }
            }
        })
        .state('eventmenu.tasks', {
            url: "/tasks",
            views: {
                'menuContent' :{
                    templateUrl: "templates/tasks.html",
                    controller: "TasksCtrl"
                }
            }
        });

    $urlRouterProvider.otherwise("/event/tasks");
});