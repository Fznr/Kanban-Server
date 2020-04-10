'use strict';
module.exports = (sequelize, DataTypes) => {
  const{Model}=sequelize.Sequelize

  class Task extends Model{}

  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          args:true,
          msg: 'Please insert title'
        },
        notEmpty:{
          args:true,
          msg: 'Please insert title'
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args:true,
          msg: 'Please insert category'
        }
      }
    }
  }, {
    sequelize
  })

  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};