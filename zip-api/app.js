const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = 8000;

// console.log(zipdb.byCity);

app.use(express.json());

app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});

app.get('/zip/:zipcode', (req, res) => {
  const zip=req.params.zipcode;
  const cities = [];
  for(var i = 0; i < zipdb.byZip[zip].length; i++)
  {
    cities.push(zipdb.byZip[zip][i].City);
  }
  res.json(cities);
});

app.get('/city/:cityname', (req, res) => {
  const city = req.params.cityname;
  res.send(zipdb.byCity[city]);
});


app.listen(PORT, () => {
});
