(function() {
  function Message($firebaseArray) {
    var allmessagesRef = firebase.database().ref().child("messages");

		var getByRoomId = function(roomId) {
        console.log('Passed RoomId: ' + roomId);
				console.log($firebaseArray(allmessagesRef));
				return $firebaseArray(allmessagesRef.orderByChild("roomId").equalTo(roomId));
		};

    return {
        getByRoomId: getByRoomId
    }
	}


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
