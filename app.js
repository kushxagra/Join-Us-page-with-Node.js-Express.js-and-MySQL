var faker = require('faker');
const { database } = require('faker/lib/locales/en')
var mysql = require('mysql2')

//console.log(faker.internet.email());

//console.log(faker.date.past());

//console.log(faker.address.city());

//console.log(faker.address.streetAddress());

//function generateAddress(){
//    console.log(faker.address.streetAddress());
//    console.log(faker.address.city());
//    console.log(faker.address.state());
//}

//generateAddress();

//--------- CONNECTING TO MYSQL -------

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '20252981kK@#',
    database:'join_us'
});

//--------- SELECTING DATA ---------- 

//var q = 'select* from users ';
//connection.query('select* from users',function(error,results,fields){
//    if(error) throw error;
//    console.log(results.length);
//});


//--------- INSERTING DATA -----------

//var q = 'insert into users(email) values("wyatt_the_dog@gmail.com")';
//connection.query('select* from users',function(error,results,fields){
//    if(error) throw error;
//    console.log(results);
//});

//--------- INSERTING DATA (2) -------

//var person = {email: faker.internet.email()};

//connection.query('INSERT INTO users SET ?', person,function(err,result){
//    if (err) throw err;
//    console.log(result);
//});

//---------INSERTING LOTS OF DATA!!!!--------------


var data = [];
for(var i = 0; i <500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
console.log(data);

//----------INSERTING LOTS OF DATA INTO THE DATABASE---------------

//var q = 'INSERT INTO users (email, created_at) VALUES ?';


//connection.query(q, [data], function(err,result){
//    console.log(err);
//    console.log(result);
//});

//connection.end();

