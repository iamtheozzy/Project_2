module.exports = function(sequelize, DataTypes) {
  var Shoes = sequelize.define("Shoes", {
    // Giving the Friend model a name of type STRING
		id: {
		    type: DataTypes.INTEGER,
		    autoIncrement: true,
		    primaryKey: true,
		},
		name: {
	    	type: DataTypes.STRING,
	    	allowNull: false,
	  	},
	  	brand: {
	    	type: DataTypes.STRING,
	    	allowNull: false,
	    },
	    size: {
	    	type: DataTypes.INTEGER,
	    	allowNull: false,
	    },
	    photos: {
            type: DataTypes.STRING,
            allowNull: false,
            get: function () {
                return this.getDataValue('photos').split(';')
            },
            set: function (val) {
               this.setDataValue('photos',val.join(';'));
            }
        },
	    buy_now: {
	    	type: DataTypes.INTEGER,
	    	allowNull: true,
	    },
	    minimum_bid: {
	    	type: DataTypes.INTEGER,
	    	allowNull: false,
	    },
	    highest_bid: {
	    	type: DataTypes.INTEGER,
	    	allowNull: false,
	    },
	    sold: {
	    	type: DataTypes.BOOLEAN,
	    	allowNull: false,
	    	defaultValue: false
	    }

	    };

Shoes.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Shoes.belongsTo(models.Sellers, {
      foreignKey: {
        allowNull: false
      }
    });
};

  return Shoes;


};

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

Sellers.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Sellers.hasMany(models.Shoes, {
      onDelete: "cascade"
    });
 };

  return Sellers;

};
