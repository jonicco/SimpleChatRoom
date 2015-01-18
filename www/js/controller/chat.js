function ChatController($rootScope, $scope, $firebase) {

    $scope.chatMain = 'partials/chat_main.html';


    var ref;
    $scope.init = function (_roomNumber) {

        console.log("call init");
        $scope.roomNumber = "ROOM " + _roomNumber;

        switch (_roomNumber) {
        case 1:
            _fbURL = 'https://pc-chatroom.firebaseIO.com/chat1/';
            break;
        case 2:
            _fbURL = 'https://pc-chatroom.firebaseIO.com/chat2/';
            break;
        case 3:
            _fbURL = 'https://pc-chatroom.firebaseIO.com/chat3/';
            break;
        case 4:
            _fbURL = 'https://pc-chatroom.firebaseIO.com/chat4/';
            break;
        case 5:
            _fbURL = 'https://pc-chatroom.firebaseIO.com/chat5/';
            break;
        default:
            _fbURL = 'https://pc-chatroom.firebaseIO.com/chat6/';
            break;
        }

        $scope.fbURL = _fbURL;
        ref = new Firebase(_fbURL);
        var sync = $firebase(ref);
        var syncObject = sync.$asObject();
        syncObject.$bindTo($scope, "messages");

    };

    // 初期化
    $scope.msg = '';

    // 渡ってきたユーザー名をバインド
    //    $scope.inputName = "jonicco";
    $scope.inputName = $rootScope.userName;

    // メッセージ入力
    $scope.addMessage = function (e) {

        // Enter以外はリターン
        if (e.keyCode != 13) return;

        // 何かしら入力されていたら登録
        if ($scope.msg !== '') {

            console.log("add message");

            var _date = new Date(),
                _year = _date.getFullYear(),
                _month = _date.getMonth() + 1,
                _day = _date.getDate(),
                _hour = _date.getHours(),
                _minute = _date.getMinutes(),
                _second = _date.getSeconds();

            ref.push({
                from: $scope.inputName,
                body: $scope.msg,
                date: _year + '-' + _month + '-' + _day + ' ' + _hour + ':' + _minute + ':' + _second
            });

            console.log("add complete.[from]=" + $scope.inputName + ", [body]=" + $scope.msg);

            // 入力が終わったら初期化
            $scope.msg = '';
        }
    };

    // DBをクリア
    $scope.clearDB = function (e) {
        console.log("call remove");
        ref.remove(onComplete);
    };

    // コールバックfor clearDB
    var onComplete = function (error) {
        if (error) {
            console.log('Synchronization failed');
        } else {
            console.log('Synchronization succeeded');
        }
    };
};