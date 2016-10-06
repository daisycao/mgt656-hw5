var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-660!');
});
app.get('/nickname', function(request, response){
    response.send('nice-toad!');
});
app.listen(process.env.PORT || 4000);