module.exports = (sequelize, DataTypes) => {
    const Style = sequelize.define('Style', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
    });
  
    return Style;
  };
  