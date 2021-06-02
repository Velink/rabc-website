const express = require('express');
const app = express();

const host = '0.0.0.0';
const PORT = process.env.PORT || 5001;

//Middleware Function : Here we server all the static files from the directory public
app.use(express.static('public'))


console.log(PORT);
console.log(__dirname);


app.listen(PORT, host, () => {
  console.log(`RABC Server is listening on port ${PORT}!`)
});


