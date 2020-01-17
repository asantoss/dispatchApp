const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Company {
		id: ID!
		name: String
		totalTerminals: Int
		masterLicense: String
		users: [User]
		locations: [Location]
	}
	type User {
		id: ID!
		firstName: String
		lastName: String
		email: String
		phoneNumber: String
		company: Company
		locations: [Location]
	}
	type Location {
		id: ID!
		company: Company
		name: String
		licenseNumber: String
		address: String
		city: String
		zipCode: String
		terminals: Int
		Tickets: [Ticket]
		TerminalsNode: [Terminal]
	}
	type Ticket {
		id: ID!
		status: Boolean
		message: String
		Location: Location!
	}
	type Terminal {
		id: ID!
		serialNumber: String
		game: Game
		monitor: String
		billAcceptor: String
		manufacturer: String
		type: String
		port: String
		Location: Location
	}
	type Game {
		id: ID!
		manufacturer: String!
		name: String!
		Terminal: Terminal
	}
	type Query {
		getCompany(id: Int!): Company
		getUser(id: Int!): User
		getUserByEmail(email: String!): User
		getLocation(id: Int!): Location
		getTerminal(id: Int!): Terminal
		getTicket(id: Int!): Ticket
		getAllLocations: [Location]
		getAllTickets: [Ticket]
		getAllTerminals: [Terminal]
		getAllGames: [Game]
	}
	type Mutation {
		createCompany(
			name: String!
			masterLicense: String!
			totalTerminals: Int!
		): Company
		createUser(
			email: String!
			password: String!
			firstName: String!
			lastName: String!
		): User
		createLocation(
			name: String!
			licenseNumber: String!
			address: String!
			city: String!
			zipCode: String!
			terminals: Int!
			companyId: Int!
		): Location
		createTerminal(
			serialNumber: String!
			game: Int
			monitor: String!
			billAcceptor: String!
			manufacturer: String!
			type: String!
		): Terminal
		createGame(name: String!, manufacturer: String!, TerminalId: Int): Game
		createTicket(message: String!, Location: Int!): Ticket
		updateUser(
			email: String
			password: String
			firstName: String
			lastName: String
			companyId: Int
		): User
		updateCompany(
			name: String
			masterLicense: String
			totalTerminals: Int
		): Company
		updateLocation(
			id: Int!
			name: String
			licenseNumber: String
			address: String
			city: String
			zipCode: String
			terminals: Int
			companyId: Int
		): Location
		updateTerminal(
			id: Int!
			serialNumber: String
			gameId: Int
			monitor: String
			billAcceptor: String
			locationId: Int
		): Terminal
		updateGame(
			id: Int
			name: String
			terminalId: Int
			manufacturer: String
		): Game
	}
`;

module.exports = typeDefs;
