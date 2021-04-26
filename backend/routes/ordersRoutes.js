const router = require('express').Router();
let Order = require('../models/order.model');

router.route('/').get((req, res) => {
	Order.find()
	.then(orders => res.json(orders))
	.catch(error => res.status(400).json(error));
});

router.route('/').post((req, res) => {
	const username = req.body.username;
	const date = Date.now();
	const item = req.body.item;
	const quantity = req.body.quantity;
	console.log(req.body);
	const order = new Order({username, date, item, quantity});
	order.save()
	.then(response => res.json("Successfully added order"))
	.catch(error => res.status(400).json(error));
});

//look for all the orders by username
router.route('/:username').get((req, res) => {
	Order.find({username: req.params.username})
	.then(orders => res.json(orders))
	.catch(error => res.status(400).json(error))
});

//update the status of the order. here it is simple text
router.route('/updatestatus/:id').put((req, res) => {
	const orderStatus = req.body.orderStatus;
	Order.findOne({_id: req.params.id})
	.then(order => {
		order.orderStatus = orderStatus
		order.save()
		.then(response => {
			res.json("order status updated")
		})
		.catch(error => res.status(400).json(error))
	})
});

module.exports = router;;
