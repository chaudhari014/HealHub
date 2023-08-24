const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const registerSchema = mongoose.Schema({
    name : {type: String, required : true},
    username : {type: String, required : true, unique : true},
    password : {type: String},
    role: {
        type: String,
        required: true,
        enum: ['doctor', 'customer'],
        default: 'customer',
    },
});

registerSchema.path('name').validate(function(value) {
    return value.trim().length > 0;
}, 'Name cannot be empty');

registerSchema.path('username').validate(function(value) {
    return value.trim().length > 0;
}, 'Username cannot be empty');

registerSchema.path('password').validate(function(value) {
    return value.trim().length > 0;
}, 'Password cannot be empty');

registerSchema.pre('save', function(next) {
    if (this.username.includes('@healhub.com')) {
        this.role = 'doctor';
    }
    next();
});

registerSchema.plugin(passportLocalMongoose);

const RegisterModel = mongoose.model('Registrations', registerSchema);

passport.use(RegisterModel.createStrategy());

passport.serializeUser(RegisterModel.serializeUser());
passport.deserializeUser(RegisterModel.deserializeUser());

module.exports = {
    RegisterModel
}