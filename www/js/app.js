/**
 * Created by zfld3287 on 19/06/2014.
 */

angular.module('routina', ['ionic', 'ui.bootstrap.datetimepicker', 'LocalStorageModule'])


.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
        .state('eventmenu', {
            url: "/event",
            abstract: true,
            templateUrl: "templates/event-menu.html"
        })
        .state('eventmenu.newtask', {
            url: "/task",
            views: {
                'menuContent' :{
                    templateUrl: "templates/task.html",
                    controller: "NewTaskCtrl"
                }
            }
        })
        .state('eventmenu.edittask', {
            url: "/task/:id",
            views: {
                'menuContent' :{
                    templateUrl: "templates/task.html",
                    controller: "EditTaskCtrl"
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