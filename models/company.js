'use strict';
module.exports = (sequelize, DataTypes) => {
	const Company = sequelize.define(
		'Company',
		{
			name: DataTypes.STRING,
			masterLicense: DataTypes.STRING,
			totalTerminals: DataTypes.INTEGER
		},
		{}
	);
	Company.associate = function(models) {
		// associations can be defined here
		Company.hasMany(models.Users);
		Company.hasMany(models.Locations);
	};
	return Company;
};
