'use strict';
module.exports = (sequelize, DataTypes) => {
	const Terminals = sequelize.define(
		'Terminals',
		{
			serialNumber: DataTypes.STRING,
			monitor: DataTypes.STRING,
			billAcceptor: DataTypes.STRING,
			manufacturer: DataTypes.STRING,
			type: DataTypes.STRING
		},
		{}
	);
	Terminals.associate = function(models) {
		// associations can be defined here
		Terminals.belongsTo(models.Locations);
		Terminals.hasOne(models.Games);
	};
	return Terminals;
};
