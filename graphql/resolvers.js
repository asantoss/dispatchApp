const resolvers = {
	Query: {
		async getCompany(root, { id }, { models }) {
			return models.Company.findByPk(id);
		},
		async getUser(root, id, { models }) {
			return models.Users.findByPk(id);
		},
		async getUserByEmail(root, email, { models }) {
			return models.Users.findOne({ where: { email } });
		},
		async getAllLocations(root, args, { models }) {
			return models.Locations.findAll();
		},
		async getAllTerminals(root, {}, { models }) {
			return models.Terminals.findAll();
		},
		async getAllTickets(root, {}, { models }) {
			return models.Tickets.findAll();
		},
		async getAllGames(root, args, { models }) {
			return models.Games.findAll();
		}
	},
	Mutation: {
		async createCompany(root, args, { models }) {
			return models.Company.create({
				...args
			});
		},
		async createUser(root, args, { models }) {
			return models.Users.create({
				...args
			});
		},
		async createLocation(root, args, { models }) {
			console.log(args);

			return models.Locations.create({
				...args
			});
		},
		async createTerminal(root, args, { models }) {
			return models.Terminals.create({
				...args
			});
		},
		async createTicket(root, { message, location }, { models }) {
			return models.Tickets.create({
				message,
				LocationId: location
			});
		},
		async createGame(root, args, { models }) {
			return models.Games.create({ ...args });
		},
		async updateUser(root, args, { models }) {
			const { id } = args;
			const user = await models.Users.findByPk(id);
			return user.update({
				...args
			});
		},
		async updateCompany(root, args, { models }) {
			const { id } = args;
			const company = await models.Company.findByPk(id);
			return company.update({
				...args
			});
		},
		async updateLocation(root, args, { models }) {
			const { id } = args;
			const location = await models.Locations.findByPk(id);
			return location.update({
				...args
			});
		},
		async updateTerminal(root, args, { models }) {
			const { id } = args;
			const terminal = await models.Terminals.findByPk(id);
			return terminal.update({ ...args });
		},
		async updateGame(root, args, { models }) {
			const { id } = args;
			const game = await models.Games.findByPk(id);
			return game.update({
				...args
			});
		}
	},
	Company: {
		async users(company) {
			return company.getUsers();
		},
		async locations(company) {
			return company.getLocations();
		}
	},
	Game: {
		async Terminal(game) {
			return game.getTerminal();
		}
	},
	User: {
		async locations(location) {
			return location.getLocations();
		},
		async company(user) {
			return user.getCompany();
		}
	},
	Location: {
		async Tickets(tickets) {
			return tickets.getTickets();
		},
		async TerminalsNode(terminals) {
			return terminals.getTerminals();
		},
		async company(location) {
			return location.getCompany();
		}
	},
	Ticket: {
		async Location(location) {
			return location.getLocation();
		}
	},
	Terminal: {
		async Location(location) {
			return location.getLocation();
		},
		async game(terminal) {
			return terminal.getGame();
		}
	}
};

module.exports = resolvers;
