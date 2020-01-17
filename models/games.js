'use strict';
module.exports = (sequelize, DataTypes) => {
	const Games = sequelize.define(
		'Games',
		{
			manufacturer: DataTypes.STRING,
			name: DataTypes.STRING,
			version: DataTypes.STRING
		},
		{}
	);
	Games.associate = function(models) {
		// associations can be defined here
		Games.belongsTo(models.Terminals);
	};
	return Games;
};
