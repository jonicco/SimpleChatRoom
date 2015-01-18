function LoginController($rootScope, $scope) {
    $scope.login = function (id, password) {

        if (id != null) {
            //　入力されたIDを保持
            $rootScope.userName = id;
            // main画面へ遷移
            $scope.ons.screen.presentPage('view/sliding_menu.html');
        } else {
            alert('input your id!');
        }
    }
}