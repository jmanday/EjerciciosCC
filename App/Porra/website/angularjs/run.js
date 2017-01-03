/**
 * Created by manu on 19/12/16.
 */
(function () {
    /**
     * run
     * @param $rootScope
     * @param $auth
     * @param $state
     */

    function run($rootScope, $state) {
        //var iduser,idworkspace,idrtu;
        console.log("primero run");
 /*       $rootScope.$state = $state;
        $rootScope.session = false;
        $rootScope.isLogged = window.localStorage.getItem("isLogged") != 'false';
        $rootScope.idworkspace = window.localStorage.getItem("idworkspace");
        $rootScope.idrtu = window.localStorage.getItem("idrtu");

        $rootScope.$on('failResponseAuthUser',
            function (data) {
                console.log("failResponseAuthUser");
                $state.go('403');
            });

        $rootScope.$on('failResponseNormalUser',
            function (response) {
                console.log("failResponseNormalUser");
                $state.go("login");
            });

       // $rootScope.$on('sesionStorage',
           // function (response, datos) {
               // if(datos.idworkspace != undefined){
               //     idworkspace = datos.idworkspace;
              //  }
                // else if(datos.idrtu){
                //     idrtu = datos.idrtu;
                // }
                //console.log("sesion ->",idworkspace,idrtu);
            //});

        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams, options){
                //event.preventDefault();
                if(toState.data && toState.data.requireLogin && !$auth.isAuthenticated()){
                    event.preventDefault();
                    console.log("require login");
                    $state.go('403');
                }

                // transitionTo() promise will be rejected with
                // a 'transition prevented' error
            });

*/
 /*
        $rootScope.$on('$stateNotFound',
            function(event, unfoundState, fromState, fromParams){
                event.preventDefault();
                //$state.go('login');
                // $state.go('login');
            });

        $rootScope.$on('$stateChangeError',
            function(event, toState, toParams, fromState, fromParams, error){
            console.error(error);
                console.log("Error al cambiar de estado",{event:event, toState:toState, toParams:toParams, fromState:fromState, fromParams:fromParams, error:error});
                //$state.go('403');
            });
*/
    }
    angular.module('myApp')
        .run(['$rootScope', '$state', run]);
})();