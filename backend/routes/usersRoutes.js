const router = require('express').Router();
let User = require('../models/user.model');

/**
 * Get all the users in the database
 */
router.route('/').get((req, res) => {
	User.find()
	.then(users => res.json(users))
	.catch(error => res.status(400).json(error));
});

router.route('/:username').get( (req, res) => {
	User.findOne({username: req.params.username})
	.then(user => res.json(user))
	.catch(error => res.status(400).json(error))
});

/**
 * Add a new user to hte database
 */
router.route('/').post((req, res) => {
	const username = req.body.username;
	const firstname = req.body.firstname;
	const lastname = req.body.lastname;
	const password = req.body.password;

	const user = new User({username, firstname, lastname, password});
	user.save()
	.then(response => res.json("Successfully added user"))
	.catch(error => res.status(400).json(error));
});


/**
 * Update a new user based on the username
 */
router.route('/:username').post((req, res) => {
	const username = req.params.username;
	const firstname = req.body.firstname;
	const lastname = req.body.lastname;
	const active = req.body.active;
	const loggedIn = req.body.loggedIn;

	User.findOne({username})
	.then(user => {
		user.firstname = firstname;
		user.lastname = lastname;
		user.active = active;
		user.loggedIn = loggedIn;
		user.save()
		.then(result => res.json('Updated successfully')
		.catch(error => res.status(400).json(error)))
	})
});

/**
 * Unlock the user
 */
router.route('/unlock/:username').post((req, res) => {
    const username = req.params.username;
    User.findOne({username})
    .then(user => {
        user.active = true;
        user.save()
        .then(result => res.json('Unlocked successfully')
        .catch(error => res.status(400).json(error)))
    })
});

/**
 * Allow the user login logout.
 * passing true logges the user and logs out otherwise.
 */
router.route('/login/:username').post((req, res) => {
    const username = req.params.username;
    const loginStatus = req.body.loginStatus;
    User.findOne({username})
    .then(user => {
        user.loggedIn = loginStatus
        user.save()
        .then(result => res.json(loginStatus ? "Successfully logged in " : "Successfully logged out")
        .catch(error => res.status(400).json(error)))
    })
});

/**
 * Delete a user based on the username
 */
router.route('/').delete( (req, res) => {
    const username = req.body.username;
    
	const user = User.deleteOne({username});
    user.save()
    .then(response => res.json(`Deleted ${username} successfully`))
    .catch(error => res.status(400).json(error))
});

module.exports = router;;
