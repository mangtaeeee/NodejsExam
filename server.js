const express = require("express");

const app = express();

const server = app.listen(3000, () => {
    console.log("Start Server : localhost:****");
});

app.set("views",__dirname + "/views");
app.set("view engine","ejs");
app.engine("html" , require("ejs").renderFile);

app.get("/", function(req, res){
    res.render("index.html");
});

app.get("/about", function(req, res){
    res.render("about.html");
});

let {Client} = require('pg');

const pg = new Client({
    host: 'server host',
    user: 'user name',     
    password: 'user password',
    database: 'dbname',
    port: 'portnumber'
});

pg.connect();

app.get("/db", function(req, res){ 
   pg.query("select * from boardtb", (err, result)=>{
    res.send(result.rows);
})
    
});

