'use strict';
module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define(
		'Users',
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			phoneNumber: DataTypes.STRING
		},
		{}
	);
	Users.associate = function(models) {
		// associations can be defined here
		Users.hasMany(models.Locations);
		Users.belongsTo(models.Company);
	};
	return Users;
};
