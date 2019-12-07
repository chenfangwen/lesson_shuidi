'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('shop',{
      id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      name:{
        type:Sequelize.STRING,
        allowNULL:false
      },
      thumb_url:Sequelize.STRING,
      created_at:Sequelize.DATE,
      updated_at:Sequelize.DATE,
      
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('shops');
  }
};
