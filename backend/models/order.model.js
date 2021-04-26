const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		trim: true,
	},
	date: {
		type: Date,
		required: true,
	},
	item: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	},
	orderStatus: {
		type: String,
		required: true,
		default: "Placed"
	}
},{
	timestamps: true
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;

