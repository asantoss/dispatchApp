'use strict';
module.exports = (sequelize, DataTypes) => {
	const Locations = sequelize.define(
		'Locations',
		{
			name: DataTypes.STRING,
			licenseNumber: DataTypes.STRING,
			address: DataTypes.STRING,
			city: DataTypes.STRING,
			zipCode: DataTypes.STRING,
			terminals: DataTypes.INTEGER
		},
		{}
	);
	Locations.associate = function(models) {
		// associations can be defined here
		Locations.hasMany(models.Terminals);
		Locations.hasMany(models.Tickets);
		Locations.belongsTo(models.Company);
	};
	return Locations;
};
