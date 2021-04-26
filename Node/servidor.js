const express = require('express');
const app = express();
var cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.static(path.join(__dirname + "/public"),{extensions: ['html']} ));


app.get('/', (req,res)=>{
	res.sendFile(path.join(__dirname +'/public/main.html'),function(error){
		if (error) {res.status(404).send("<h2>error 404</h2>");
	}
	});
});

app.get('/carrito.html', (req,res)=>{
	res.send("respuesta");
})



app.listen('8000', function() {
  console.log('Servidor web escuchando en el puerto 8000');
});