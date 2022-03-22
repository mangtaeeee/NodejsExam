const express = require("express");

const app = express();

const server = app.listen(3000, () => {
    console.log("Start Server : localhost:3000");
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
    host: '192.168.0.30',
    user: 'refficstest',     
    password: 'fpvlrtm1!',
    database: 'refficstest',
    port: 5432
});

pg.connect();

app.get("/db", function(req, res){ 
   pg.query("select * from boardtb", (err, result)=>{
    res.send(result.rows);
})
    
});

