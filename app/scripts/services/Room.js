(function() {
  function Room($scope, $firebaseArray) {
      var Room = {};

    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

<<<<<<< HEAD
    var addRoom = function(room){
       rooms.$add(room);
     };

    var room = {
      all: rooms,
      add: addRoom
    }

    return room;
=======
    Room.all = rooms;

    Room.add = function(room){
       rooms.$add(room);
};

    return Room;
>>>>>>> ba6d2d12895b84368c3135951c80125b0c886d52
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
