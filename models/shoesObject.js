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
	    photos: {
            type: DataTypes.STRING,
            allowNull: false,
            get: function () {
                return this.getDataValue('photos').split(';')
            },
            set: function (val) {
               this.setDataValue('photos',val.join(';'));
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
	    	type: DataTypes.STRING,
	    	allowNull: false,
	    	defaultValue: "false"
	    }

	    };

  return Shoes;


};

odule.exports = function(sequelize, DataTypes) {
  var Seller = sequelize.define("Seller", {
  		id: {
		    type: DataTypes.INTEGER,
		    autoIncrement: true,
		    primaryKey: true,
		},


