const express = require ('express');
const { uuid } = require ('uuidv4');

const app = express();

const data_collection = [];

app.use (express.json());
//routes
app.get('/data', (req, res) => {
  //desetruturando o query
  let {id} = req.query;

  let response = id
  ? data_collection.filter(data => data.id === id)
  : data_collection;
  
  return res.json(response);
});

app.post('/data', (req, res) => {
  
  let { info_1, info_2, info_3 } = req.body;

  let data = {
    id: uuid(),
    info_1: info_1,
    info_2: info_2,
    info_3: info_3,
  }

  data_collection.push(data);

  return res.json(data);
});

app.delete('/data/delete/:id', (req, res) => {
  
  let { id } = req.params;
  let dataIndex = data_collection.findIndex(data => data.id === id);

  if (dataIndex < 0){
    return res.status(400).json({error: `invalid id`});
  }
  
  data_collection.splice(dataIndex, 1);

  return res.status(204).send();
});

app.put('/data/update/:id', (req, res) => {
  
  let { info_1, info_2, info_3 } = req.body;
  
  let { id } = req.params;
  let dataIndex = data_collection.findIndex(data => data.id === id);

  if (dataIndex < 0){
    return res.status(400).json({error: `invalid id`});
  }

  let data = {
    id: id,
    info_1: info_1,
    info_2: info_2,
    info_3: info_3,
  }

  data_collection [dataIndex] = data;

  return res.json(data);
});

let port = 3000;
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});