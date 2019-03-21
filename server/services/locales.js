var db = require("../util/db");

function Service() {
  
  this.getAll = async (req, res) => {
    var query = "SELECT * FROM locales";
    var result = await db.query(query);
    return result;
  };

  this.post = (req, res) => res.status(200).send("Agrega un nuevo local");

  this.put = (req, res) => res.status(200).send("Actualiza un local por id");

  this.deleteById = (req, res) =>
    res.status(200).send("Elimina una categoría por id");
}

module.exports = Service;
