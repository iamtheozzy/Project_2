module.exports = function(sequelize, DataTypes) {
  var Sellers = sequelize.define("Sellers", {
  		id: {
		    type: DataTypes.INTEGER,
		    autoIncrement: true,
		    primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		posts: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		sales: {
			type: DataTypes.INTEGER,
			allowNull: true
		}

		});

Sellers.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Sellers.hasMany(models.Shoes, {
      onDelete: "cascade"
  });
   
 };

  return Sellers;

};
