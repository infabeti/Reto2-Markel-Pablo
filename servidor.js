const express = require('express');
const app = express();
var path = require('path');
var cors = require('cors');

app.use(cors());

app.use(express.static(path.join(__dirname, "/public"),{extensions: ['html']} ));

//error index
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/main.html'),function(error){
    if(error){
      res.status(404).send("<h2>error 404: No existe o no se encuentra la página principal</h2>");
    }

  });
});

app.listen(8000, () => {
  console.log('La app está escuchando desde el puerto 8000!')
});