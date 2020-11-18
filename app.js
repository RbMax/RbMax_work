let express = require('express');
let app = express();
let port = 3000;
app.use(express.static('public'));
//задаём шабланизатор
//прописываем путь до папки
//app.set('views','./views');
//запуск шабланизатора
app.set('view engine','pug');

app.get('/',function(request,response){
  //  response.end('<h1>Main Page</h1> Super site');
    response.render('index.pug');
});

app.listen(port,function(){
    console.log('node express work on 3000');
});