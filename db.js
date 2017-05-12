var User = require('./models/user').User;
var async = require('async')

mogoose.conection.on('open', function() {
    async.parallel([
        function(callback) {
            var admin = new User({ username: 'admin', password: 'maksisadmin' })
        }
    ])
})