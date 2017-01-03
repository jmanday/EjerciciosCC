/**
 * Created by manu on 25/10/16.
 * Rutas de AngularJS con ng-route
 */

(function () {

    function routes($locationProvider, $stateProvider, $mdThemingProvider) {
/*        $mdThemingProvider.theme('default').primaryPalette('green').accentPalette('green');
        $locationProvider.html5Mode(true);

        $stateProvider
            /**
             * Ruta absracta que engloba un frame para todos las rutas que hereden de esta
             */
 /*           .state('home', {
                abstract:true,
                templateUrl: '/porra/frame'
            })

            /**
             * Ruta que gestiona el renderizado de los usuarios
             * Asocia al controlador altaUser
             */
 /*           .state('home.usuarios', {
                url:"/",
                templateUrl: '/porra/usuarios',
                controller: 'loginUser',
                controllerAs: 'lu'
            })
*/
            /**
             * Ruta que gestiona el renderizado de los partidos
             * Asocia al controlador altaUser
             */
/*            .state('home.partidos', {
                url:"/",
                templateUrl: '/porra/partidos',
                controller: 'altaUser',
                controllerAs: 'au'
            })
*/
            /**
             * Ruta que gestiona el renderizado de las apuestas
             * Asocia al controlador altaUser
             */
 /*           .state('home.apuestas', {
                url:"/",
                templateUrl: '/porra/apuestas',
                controller: 'altaUser',
                controllerAs: 'au'
            })
*/
    }
    angular.module('myApp')
        .config(['$locationProvider','$stateProvider','$mdThemingProvider', routes]);

})();

