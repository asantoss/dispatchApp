'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Terminals', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			serialNumber: {
				type: Sequelize.STRING
			},
			monitor: {
				type: Sequelize.STRING
			},
			billAcceptor: {
				type: Sequelize.STRING
			},
			manufacturer: {
				type: Sequelize.STRING
			},
			type: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Terminals');
	}
};
