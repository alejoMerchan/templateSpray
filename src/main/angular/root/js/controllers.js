var miApp = angular.module('miApp', ['ngResource']);

miApp.controller('ramosListCtrl', function ($scope,Solicitudes) {
  $scope.solicitudes = Solicitudes.query();

});

miApp.factory('Solicitudes',function($resource){

    return $resource('http://10.203.10.31:9420/procesarsolicitud/expide')

})