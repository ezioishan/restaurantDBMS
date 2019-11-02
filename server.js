const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const app = express();

const port = 5000;

//Database Connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "dbms_project"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//Handlebars middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//User-function declaration
function doQuery(command){
    let data = []
    con.query(command, function(err, result){
        if(err)
            throw err;
        console.log("Query Successful!");
        let column_len = result.length, i;
        for(i=0; i<column_len; i++){
            let temp = []
            for(const [key, value] of Object.entries(result[i])){
                temp.push(value);
            }
            data.push(temp);    
        }
    });
    return data;
}

//Routing
app.get('/', function(req, res){
    res.render('index');
})

app.get('/restaurants', function(req, res){
    let res_data = doQuery("select * from restaurant")
    res.render('restaurants', {
        res_data : res_data
    });
});

app.get('/orders', function(req, res){
    let dish_data = doQuery("select * from dish_details");
    res.render('orders', {
        dish_data : dish_data
    });
});

app.post('/orders/:dish_id', function(req, res){
    console.log(req.params.dish_id);
    //for the given dish_id check the stock-> if present then increment the counter
    res.send(req.params.dish_id);
});

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});
