let express = require('express');
let app = express();
app.use(express.static('public'));

app.listen(3000,function(){
    console.log('n-works');
});

app.get('/',function(req,res){
    res.render('index.html');
})
app.get('/',function(req,res){
    res.end('<h1>hello</h1>');
});