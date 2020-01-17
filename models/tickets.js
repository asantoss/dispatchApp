'use strict';
module.exports = (sequelize, DataTypes) => {
	const Tickets = sequelize.define(
		'Tickets',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true
			},
			status: {
				type: DataTypes.STRING,
				defaultValue: false,
				allowNull: false
			},
			message: {
				type: DataTypes.TEXT
			}
		},
		{}
	);
	Tickets.associate = function(models) {
		// associations can be defined here
		Tickets.belongsTo(models.Locations);
	};
	return Tickets;
};
