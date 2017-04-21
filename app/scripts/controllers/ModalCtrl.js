(function() {
    function ModalCtrl($scope, Room, $uibModalInstance) {
         this.cancel = function () {
             $uibModalInstance.dismiss();
         };

         this.submit = function () {
             Room.add(this.newRoom);
             $uibModalInstance.close();
         };
     }

     angular
         .module('blocChat')
         .controller('ModalCtrl', ['$scope', 'Room', '$uibModalInstance', ModalCtrl]);
 })();
