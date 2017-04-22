(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");

    var messages = $firebaseRef.child('messages');

    return {
			getByRoomId: function (roomId) {
				return $firebaseArray(messages.orderByChild("roomId").equalTo(roomId));
			}
		};
	}

    /*var addRoom = function(room){
       rooms.$add(room);
     };

    var room = {
      all: rooms,
      add: addRoom
 }
*/


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
