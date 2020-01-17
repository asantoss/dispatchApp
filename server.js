const express = require('express');
const db = require('./models');
const app = express();

const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const apolloServ = new ApolloServer({
	typeDefs,
	resolvers,
	context: { models: db }
});
apolloServ.applyMiddleware({ app });

app.get('/api/customers', (req, res) => {
	const customers = [
		{ id: 1, firstName: 'John', lastName: 'Doe' },
		{ id: 2, firstName: 'Brad', lastName: 'Traversy' },
		{ id: 3, firstName: 'Mary', lastName: 'Swanson' }
	];

	res.json(customers);
});
app.get('/api/store', (req, res) => {
	db.Users.create({
		firstName: 'Alexander',
		lastName: 'Santos',
		email: 'alexsantosantana@live.com',
		password: '123456',
		phoneNumber: '7703695370'
	}).then(console.log);
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);
