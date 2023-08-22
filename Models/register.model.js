const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    username : {type: String, required : true},
    email : {type: String, required : true},
    password : {type: String, required : true},
    role: {
        type: String,
        required: true,
        enum: ['doctor', 'customer'], 
        default: 'customer',
    },
});

registerSchema.pre('save', function(next) {
    if (this.email.includes('@healhub.com')) {
        this.role = 'doctor';
    }
    next();
});

const RegisterModel = mongoose.model('Registrations', registerSchema);

module.exports = {
    RegisterModel
}