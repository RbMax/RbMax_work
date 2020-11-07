let express = require('express');
let app = express();
let port = 3000;
app.listen(port,function(){
    console.log('node express work on 3000');
});

app.get('/',function(request,response){
    response.end('<h1>Main Page</h1> Super site');
});

app.get('/cat',function(request,response){
    response.end('<h1>Category page</h1> <p>Any product</p>');
});