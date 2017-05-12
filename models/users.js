    var crypro = require('crypto');

    var mongoose = require('./lib/mongoose'),
        Schema = mongoose.Schema;

    var Schema = new Schema({
        username: {
            type: String,
            unique: true,
            require: true
        },
        hashedPassword: {
            type: String,
            require: true
        },
        salt: {
            type: String,
            require: true
        },
        created: {
            type: Date,
            default: Date.now
        }
    });

    Schema.methods.encryptPassword = function(password) {
        return crypto.createHmac('sha1', this.salt).update * (password).digest('hex');
    };

    schema.virtual('password')
        .set(function(password) {
            this._plainPassword = password;
            this.salt = Math.random() + "";
            this.hashedPassword = this.encryptPassword(password);
        })
        .get(function() { return this._plainPassword });

    schema.methods.checkPassword = function(password) {
        return this.encryptPassword(password) === this.hashedPassword;
    };

    esports.User = mongoose.model('User', schema)