(function() {
  function Room($scope, $firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    var addRoom = function(room){
       rooms.$add(room);
     };

    var room = {
      all: rooms,
      add: addRoom
    }

    return room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
