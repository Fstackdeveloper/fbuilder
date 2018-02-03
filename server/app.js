const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



function fcrousel()
{
   let JsonObj = {};
   
   JsonObj['types'] = 
             [       
              {id: 'photos', text: 'Photos'},
              {id: 'videos', text: 'Videos'},
              {id: 'links', text: 'Links'}
             ];
    
    JsonObj['links'] = 
            [
              {id: 1, text: 'link category 1'},
              {id: 2, text: 'link category 2'}
            ];
            
    JsonObj['photos'] = 
            [
              {id: 1, text: 'photo category 1'},
              {id: 2, text: 'photo category 2'}
            ];
            
    JsonObj['videos'] = 
            [
              {id: 1, text: 'video category 1'},
              {id: 2, text: 'video category 2'}
            ];
            
    JsonObj['products'] = 
            [
              {id: 1, text: 'product category 1'},
              {id: 2, text: 'product category 2'}
            ];
            
    JsonObj['offers'] = 
            [
              {id: 1, text: 'offer category 1'},
              {id: 2, text: 'offer category 2'}
            ];


   return JSON.stringify(JsonObj);

}


function readJson(req, res)
{
    var fs = require('fs');
    var jsonData;
    fs.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data){
        res.send(  data);
     });
     
}


function writeInJson(req, res)
{
   let JsonObj = req.body.build;
    let jsonString = JSON.stringify(JsonObj);
    var fs = require('fs');
    fs.writeFile('myjsonfile.json', jsonString, 'utf8', function(err){if(err) throw err;});

    res.send('test');

}



// Add headers
app.use(function (req, res, next) {
    
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', "*");

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
     next();
});


app.get('/', (req, res) => readJson(req, res));
app.get('/fcrousel', (req, res) => res.send( fcrousel() ));
app.post('/save', (req, res) =>  writeInJson(req, res) );


app.listen(3000, () => console.log('Example app listening on port 3000!'));