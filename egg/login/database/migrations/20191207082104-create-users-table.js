'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    const {INTEGER,STRING,DATE} = Sequelize;
    return queryInterface.createTable('users',{
      user_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      username:{
        type:Sequelize.STRING,
        allowNULL:false
      },
      password:{
        type:String(255),
        allowNULL:false
      },
      avatarUrl:STRING(255),
      mobile:STRING(11),
      sex:{type:INTEGER },
      created_at:Sequelize.DATE,
      updated_at:Sequelize.DATE,
      
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};