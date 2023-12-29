const express=require('express');
const request=require('request');


const app=express();


app.get("/",(req,res) => {
    let state=req.query.city;
    // res.send('hello,this is my weather app');

    const request = require('request');
    request('https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=c131ebb4a2f08df9ad339450f55a3327',
     function (error, response, body) {
       let data=JSON.parse(body)
        if(response.statusCode===200){
            res.send('the weather in your city "${city}" is ${data.list[0].weather[0].decription}')
        }
    //   console.error('error:', error); // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //   console.log('body:', body); // Print the HTML for the Google homepage.
    });


});

app.listen(3001,() =>console.log('server started on port 3001'));
