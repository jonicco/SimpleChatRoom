angular

.module('myApp', ['onsen.directives', 'firebase'])

.value('fbURL', {
    room1: 'https://pc-chatroom.firebaseIO.com/chat1/',
    room2: 'https://pc-chatroom.firebaseIO.com/chat2/',
    room3: 'https://pc-chatroom.firebaseIO.com/chat3/',
    room4: 'https://pc-chatroom.firebaseIO.com/chat4/',
    room5: 'https://pc-chatroom.firebaseIO.com/chat5/'
})

.factory('Schema', function ($firebase, fbURL) {
    return $firebase(new Firebase(fbURL));
});