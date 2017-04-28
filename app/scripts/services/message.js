(function() {
  function Message($firebaseArray, $cookies) {
    var allmessagesRef = firebase.database().ref().child("messages");
    var messages = $firebaseArray(allmessagesRef);

    var getByRoomId = function(roomId) {
      console.log('Passed RoomId: ' + roomId);
      console.log($firebaseArray(allmessagesRef));
      return $firebaseArray(allmessagesRef.orderByChild("roomId").equalTo(roomId));
    }

    var addRoom = function(room){
      rooms.$add(room);
    };

    var sendMessage = function(newMessage) {
        messages.$add({
            username: newMessage.username,
            content: newMessage.content,
            sentAt: (new Date()).toString(),
            roomId: newMessage.roomId
        });
    }

    return {
      send: sendMessage,
      getByRoomId: getByRoomId,
      addRoom: addRoom
    }
  }

angular
.module('blocChat')
.factory('Message', ['$firebaseArray', '$cookies', 'Room', Message]);
})();
