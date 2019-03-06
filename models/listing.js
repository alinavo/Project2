module.exports = function(sequelize, DataTypes) {
    var Listing = sequelize.define("Listing", {
      post_title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
      post_body: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1, 750]
          }
      },
      imageURL: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1, 750]
          }
      },
      location: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      category: {
          type: DataTypes.STRING,
          defaultValue: "General",
      },
      flair: {
          type: DataTypes.STRING,
      },
      item_condition: {
          type: DataTypes.STRING,
      }
    });
    return Listing;
  };
  