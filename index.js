const express = require('express');
const mysql = require('mysql');


app.get('/', (request, response) => {
    response.send('<h1>Servidor con express</h1>')
})
 
app.get('/api/users', (request, response) => {
    response.json(users)
})

const app = express();

app.use(bodyParser.json());

let count = 0;
function masuno(){
  count+=1;
}
setInterval(function(){ 
 
  masuno()
  console.log(count + " seg") 

  if(count == 50){
    console.log("esta por acabarse")
  }
}, 1000);
