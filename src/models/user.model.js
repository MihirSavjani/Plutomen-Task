const mongoose = require('mongoose');
const departmentEnum = {
    values: ['Research', 'Development', 'Production', 'Testing', 'Sales', 'Marketing'],
    message: 'Invalid department value'
};
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    role: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true,
        enum: departmentEnum
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
