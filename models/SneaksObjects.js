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
	    	type: DataTypes.STRING,
	    	allowNull: false,
	    },
	    photo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
	    buy_now: {
	    	type: DataTypes.STRING,
	    	allowNull: true,
	    },
	    minimum_bid: {
	    	type: DataTypes.STRING,
	    	allowNull: false,
	    },
	    highest_bid: {
	    	type: DataTypes.STRING,
	    	allowNull: true,
	    },
	    sold: {
	    	type: DataTypes.BOOLEAN,
	    	allowNull: false,
	    	defaultValue: false
	    }

	    });


  return Shoes;


};

