const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: true,
		trim: true,
	},
	lastname: {
		type: String,
		required: true,
		trim: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 4
	},
	password: {
		type: String,
		required: true,
		unique: false,
		trim: false,
		minlength: 4
	},
	loggedIn: {
		type: Boolean,
		default: false
	},
	active: {
		type: Boolean,
		default: true
	}
},{
	timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;

