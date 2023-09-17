const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: { type: String, required: true, minlength: 9, unique: true  }, 
    hashedPassword: { type: String, required: true },
    fullName: { type: String, required: true },
    phone: { type: Number, required: true },
    roles: { type: [{ type: String, enum: ['user', 'admin'] }], default: ['user'] }
});

userSchema.index({ email: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('user', userSchema);

module.exports = User;