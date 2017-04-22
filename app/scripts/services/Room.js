(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    return {
    			all: rooms,
    			create: function (newRoom) {
    				rooms.$add(newRoom);
    			}
    		};
    	}
/*=======
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
>>>>>>> 6030984719fff07d3c21dc9d77559fbdc69eff79
*/
  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
