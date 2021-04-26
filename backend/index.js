const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use(express.json());// this is for parsing the json 
app.use(cors());
const port = process.env.PORT || 9080;

const connectionString = process.env.MONGO_CONNECTION_STRING;
mongoose.connect(connectionString, {
	useNewUrlParser: true, 
	useCreateIndex: true,
	useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
	console.log('Connected to mongodb');
})

//simple route to land on the first page.
app.get('/', (req, res) => {
	res.send('hello world');
});

//routes needed per models
const usersRouter = require('./routes/usersRoutes');
const ordersRouter = require('./routes/ordersRoutes');

app.use('/user', usersRouter);
app.use('/order', ordersRouter);

app.listen(port, () => {
	//just something to see on the console
	console.log(`running on the port ${port}`);;
});
