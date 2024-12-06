const { MongoClient } = require('mongodb')
const url = "mongodb://localhost:27017/notesDb"

let _db;

// Essa função faz o seguinte
// 1. Conecta com o banco de dados
// 2. Salva a conexão na variável _db
// 3. Chama a função de callback cb
// 4. Se der erro, chama a função de callback com o erro
const initDb = cb => {

  MongoClient.connect(url)
    .then(client => {
      _db = client
      cb(null, _db)
    })
    .catch(err => {
      cb(err);
    })

}

const getDb = () => {
  return _db;
}

module.exports = {
  initDb,
  getDb
}