const express = require ('express');

const app = express();

app.use (express.json());
//routes
app.get('/getTest', (req, res) => {
  //desetruturando o query
  let {teste} = req.query;

  return res.json(
    {
      msg: `this is a "GET" route`,
      query: req.query,
      teste: teste,
    }
  );
});

app.post('/postTest', (req, res) => {
  return res.json(
    {
      mgs: `this is a "POST" route`,
      body: req.body
    }
  );
});

app.delete('/deleteTest/:id', (req, res) => {
  return res.json(
    {
      msg: `this is a "DELETE" route`,  
      params: req.params,
      id: req.params.id,
    }
  );
});

app.put('/putTest/:id', (req, res) => {
  return res.json(
    {
      msg: `this is a "PUT" route`,
      params: req.params,
      id: req.params.id,
      body: req.body
    }
  );
});

let port = 3000;
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});