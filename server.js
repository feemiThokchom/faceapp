const express=require('express');//load module
const dateModule = require('./date-mod');
const app=express();
const path = require('path');

app.use('/static',express.static(path.join(__dirname, "/src/static")));
app.use('/models',express.static(path.join(__dirname, '/src/models')));

app.use('/home', (req,res,err)=>{
    res.sendFile(path.join(__dirname+'/src/views/index.html'));
})
// app.use('/', function(req, res){
// const datestr = dateModule.myDateTime();
//     res.send(
//         {
//             "name":"Feemi",
//             "date":datestr

//         }
//     ).toJSON();
// });
//if '/' then execute the function

/*
defining route ie '/'
every route has a request and response obj in the call back fn
to send response for the particular route
*/

app.listen(3000,function(){
    console.log("Server Listening to port 3000");
    const date = dateModule.myDateTime();
    console.log("date from date module", date);
});
