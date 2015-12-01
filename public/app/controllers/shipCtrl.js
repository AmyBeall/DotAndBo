angular.module('shipCtrl', [])
.controller('shippingController', function($http, $scope, $sce) {

	var vm = this,
		postage;

	vm.sendInfo = function() {
		vm.processing = true;
		labelData = vm.label;
    	$http.post('/api/ship/', labelData)
    	.then(function(response){
    		console.log(response.data);

		    $scope.postage = $sce.trustAsResourceUrl(response.data);

    	});
	};

});
