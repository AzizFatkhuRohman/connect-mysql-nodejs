const express = require('express');
const exhbs = require('express-handlebars');
const mysql = require('mysql');
const routes = express.Router()
require ('dotenv').config();
const app = express();
const port = process.env.port || 5000;
const db = require ('./app/database')
if(db){
    console.log("Database Connected");
}
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
const handlebars = exhbs.create({extname:'.hbs',});
app.engine('.hbs', handlebars.engine);
app.set('view-engine', '.hbs');
app.get('/', (req,res)=>{
   res.send('hello')
})
app.listen(port, ()=>console.log(`Server started: ${port}`));