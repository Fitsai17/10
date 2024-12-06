module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      styleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Styles',
          key: 'id',
        },
      },
    });
  
    return Item;
  };
  