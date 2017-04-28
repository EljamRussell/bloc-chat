(function () {
	function UserModalInstanceCtrl($scope, $uibModalInstance, $cookies) {
		this.submit = function () {
			$cookies.put('blocChatCurrentUser', this.name); //setting cookie

			console.log("You just created a new user: " + this.name);
			console.log("You just created a new cookie: " + $cookies.blocChatCurrentUser);

			$uibModalInstance.close($cookies.blocChatCurrentUser);
		};
	}

	angular
		.module('blocChat')
		.controller('UserModalInstanceCtrl', ['$scope', '$uibModalInstance', '$cookies', UserModalInstanceCtrl]);
})();
