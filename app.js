const path=require('path');
const express=require('express');
const bodyParser = require('body-parser');
const sequelize=require('./util/database');
const user=require("./model/todorem");
const app=express();
const cors=require('cors');
app.use(cors());
const appcontroller=require('./controller/appcontroller')
app.use(bodyParser.json({extended:false}));
app.post("/todo/addtodo",appcontroller.posttodo);
app.get("/todo/getalltodo",appcontroller.getalltodo);
app.post("/todo/done/:id",appcontroller.done);
sequelize.sync()
.then(res=>console.log("done"))
.catch(err=>console.log(err));
app.listen(4000)