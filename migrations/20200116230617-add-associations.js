'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
		return queryInterface
			.addColumn('Tickets', 'LocationId', {
				type: Sequelize.INTEGER,
				refrences: {
					model: 'Tickets',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			})
			.then(() => {
				return queryInterface.addColumn('Terminals', 'LocationId', {
					type: Sequelize.INTEGER,
					refrences: {
						model: 'Locations',
						key: 'id'
					},
					onUpdate: 'CASCADE',
					onDelete: 'SET NULL'
				});
			})
			.then(() => {
				return queryInterface.addColumn('Locations', 'UserId', {
					type: Sequelize.INTEGER,
					refrences: {
						model: 'Users',
						key: 'id'
					},
					onUpdate: 'CASCADE',
					onDelete: 'SET NULL'
				});
			})
			.then(() => {
				return queryInterface.addColumn('Terminals', 'GameId', {
					type: Sequelize.INTEGER,
					refrences: {
						model: 'Games',
						key: 'id'
					},
					onUpdate: 'CASCADE',
					onDelete: 'SET NULL'
				});
			})
			.then(() => {
				return queryInterface.addColumn('Games', 'TerminalId', {
					type: Sequelize.INTEGER,
					refrences: {
						model: 'Terminals',
						key: 'id'
					},
					onUpdate: 'CASCADE',
					onDelete: 'SET NULL'
				});
			});
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
		return queryInterface.removeColumn('Tickets', 'LocationId').then(() => {
			return queryInterface.removeColumn('Terminals', 'LocationId');
		});
	}
};
