var db = require("../util/db");

function Service() {
  this.getByShop = (req, res) => res.status(200).send("Busca reviews por shop");

  this.getByUser = (req, res) => res.status(200).send("Busca reviews por user");
  
  this.post = (req, res) => res.status(200).send("Agrega un nuevo review");

  this.put = (req, res) => res.status(200).send("Edita un review por id");

  this.deleteById = (req, res) =>
    res.status(200).send("Elimina una review por id");
}

module.exports = Service;
