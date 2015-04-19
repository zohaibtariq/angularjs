/***************************************************
*                                                  *
*        ANGULARJS 1.3 INITIALISING APP            *
*                                                  *
***************************************************/

var app = angular.module("servicesAndFactories", ["ngMaterial"]);

// service
app.service("myCustomService", function(){
    var studentsArray = [];    
    
    this._saveStudentInService = function(studentObject){        
        studentsArray.push(studentObject);
    };

    this.getAllStudents = function(){        
        return studentsArray;
    };
});

/***************************************************
*                                                  *
*          CONTROLLERS INTERACTING WITH SERVICE    *
*                                                  *
***************************************************/

app.controller("controllerFirst", function($scope,myCustomService){
    $scope.savedStudent=function(){
        var student = {
            name:$scope.student_name,
            age:$scope.student_age
        }
        myCustomService._saveStudentInService(student);
    };
});

app.controller("controllerSecond", function($scope,myCustomService){
    $scope.allStudents = myCustomService.getAllStudents();
});