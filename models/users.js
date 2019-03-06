module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      uniqueID: {
        type: DataTypes.STRING
      },
      given: {
        type: DataTypes.INTEGER
      },
      taken: {
        type: DataTypes.INTEGER
      },
      location: {
        type: DataTypes.INTEGER,
        validate: {
          len: [1]
        }
      },
      wishlist: {
        type: DataTypes.STRING
      },
      badges: {
        type: DataTypes.STRING
      },
      milestones: {
        type: DataTypes.STRING
      },
      picture: {
        type: DataTypes.STRING
      }
      });
    return Users;
  };
  