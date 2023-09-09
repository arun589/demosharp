const Sequelize=require("sequelize");
const sequelize=new Sequelize("products","root","Arun@2002",{dialect:'mysql'});
module.exports=sequelize;