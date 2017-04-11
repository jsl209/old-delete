var rally = require('rally');
var  restApi = rally({
  apiKey: '_Ft1vnwiFSyWG8woOxDNLape6cQbL03mjUV6W4CgygA'
});

var express = require('express');
var app = express();

app.get('/', function(req, res){
    
    //enter commands to execute
    
        res.status(200).json({
            status: 'success', //these are json name value pairs, you can add as many as you like
            value: 200,        //strings are always wrapped with single or double quotes 
            time: Date.now(),  //Date.now() is a native timestamp - returns ms since 1970
            //ip: req.ip       //ip address of requester
        });
});

app.get('/api/calc/multiply/:param1/:param2', function(req, res) { //multiply 2 parameters
    var p1 = req.params.param1;
    var p2 = req.params.param2;
    var result = p1 * p2;
    
    res.status(200).json({
        status: 'success',
        result: result //returns result of calculation 
    });
});

app.get('/api/whatIsYourName/:param1', function(req, res) {
  var p1 = req.params.param1;
  
  res.status(200).json({
    status: 'success',
    name: p1
  });
});

//character counter
app.get('/api/charcount/:param1', function(req, res) {
  var p1 = req.params.param1;
  var count = p1.length;
  
  res.status(200).json({
    status: 'success',
    count: count
  });
});

app.get('/brendan/userstory/:param', function(req, res){

restApi.query({
    type: 'hierarchicalrequirement', //the type to query
    start: 1, //the 1-based start index, defaults to 1
    pageSize: 200, //the page size (1-200, defaults to 200)
    limit: 10, //the maximum number of results to return- enables auto paging
    order: 'Rank', //how to sort the results
    fetch: ['FormattedID', 'Name', 'ScheduleState', 'Children'], //the fields to retrieve
    //query: queryUtils.where('DirectChildrenCount', '>', 0), //optional filter
    scope: {
        workspace: 'workspace/22839199431' //specify to query entire workspace
        //project: '/project/2345' //specify to query a specific project
    },
    requestOptions: {} //optional additional options to pass through to request
}, function(error, result) {
    if(error) {
        console.log(error);
    } else {
        console.log(result.Results);
    }
    res.status(200).json({
    status: 'success'
    });
});
  
});
app.listen(3000, function (){
  console.log('express listening on port 3000...');
});   //tells the server to listen to incoming requests on port 3000 