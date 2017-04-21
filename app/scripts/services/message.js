(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

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
    .factory('Message', ['$firebaseArray', Message]);
})();
