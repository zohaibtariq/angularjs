var app = angular.module("phoneDirectory", []);

app.controller("user", function($scope){
    $scope.name = "Zohaib Tariq";
    $scope.countries = [
    	"Pakistan",
    	"India",
    	"UK",
    	"USA"
    ];
});

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