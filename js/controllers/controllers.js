/***************************************************
*                                                  *
*        ANGULARJS 1.3 INITIALISING APP            *
*                                                  *
***************************************************/

var app = angular.module("phoneDirectory", []);

/***************************************************
*                                                  *
*          USER CONTROLLER WITH DATA               *
*                                                  *
***************************************************/

app.controller("user", function($scope){
    $scope.name = "Zohaib Tariq";
    $scope.countries = [
    	"Pakistan",
    	"India",
    	"UK",
    	"USA"
    ];
});

/***************************************************
*                                                  *
*   SEE INDEX.HTML LINE #20 TO ITERATE ON ARRAY    *
*                                                  *
***************************************************/

app.controller("countriesList", function($scope){
	$scope.totalPopulation = 125;	
    $scope.countries = [
    	{name : "Pakistan",population: 18},
    	{name : "India",population: 20},
    	{name : "Iran",population: 15}
    ];
    $scope.populationPercentage = function(countryPopulation){
    	return ((countryPopulation/$scope.totalPopulation)*100);
    };
});

/***************************************************
*                                                  *
*          INHERITANCE SCOPE AND ROOT              *
*                                                  *
***************************************************/

//parent controller
app.controller("parentController",function($scope){
    $scope.userName = "zohaib";
    $scope.gender = "male";    
});

//child controller
app.controller("childController",function($scope){

});

// use controller with as in html if you use this instead of $scope in your controller see line #39 of index.html
app.controller("thisAsController",function(){
    this.name = "thisAsController";
});

// root super global variable || global variable || means its scope is super parent so if not in any controller scope it will look for variable on root scope
app.controller("scopeController",function($scope,$rootScope){
    $scope.scopeName = "i am name of local scope"
    $rootScope.scopeName = "i am name of root scope"
});

/***************************************************
*                                                  *
*                EVENT HANDLING                    *
*                                                  *
***************************************************/

//events bubbling
app.controller("eventBubbling",function($scope){
    $scope.userInputName = "";
    $scope.userInputNames = [];
    $scope.add = function(){        
        $scope.userInputNames.unshift($scope.userInputName); // unshift will insert in array from first index which is zero of arrays
        // $scope.userInputNames.push($scope.userInputName); // push will insert new item at the last index of array
    };
});

//events handeler first controller
app.controller("eventHandelerFirstController",function($scope){
    $scope.userInputName = "";
    $scope.raiseEvent = function(){
        // broadcast notifies the child and emit notifies the parent
        // notifies means passing data or just data
        $scope.$broadcast("eventSaveUserName",$scope.userInputName);// event is raised from here
    };
});

//events handeler second controller
app.controller("eventHandelerSecondController",function($scope){
    $scope.usersName = "";
    $scope.$on("eventSaveUserName",function(e,data){ // raised events must be listened so above raised event of eventSaveUserName is listened here
        $scope.usersName = data;
    });
});