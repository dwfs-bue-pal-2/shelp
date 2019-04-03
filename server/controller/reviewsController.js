var service = require("../services/reviews");

var srv = new service();

function Controller() {
  this.getByShop = (req, res) => {
    var id = req.params.id;
    if (!id) {
      res.status(404).send("Local no encontrado");
      return;
    }
    srv.getByShop(id, res);
  };

  this.getByUser = (req, res) => {
    var id = req.params.id;

    if (!id) {
      res.status(404).send("User no encontrado");
      return;
    }
    srv.getByUser(id, res);
  };

  this.post = (req, res) => {
    var data = req.body;
    if (!data.user || !data.shop || !data.score) {
      res.status(400).send("Informacion no valida");
      return;
    }
    srv.post(data, res);
  };

  this.put = (req, res) => {
    var id = req.params.id;
    var data = req.body;
    if (!id) {
      res.status(404).send("Review no encontrado");
      return;
    } else if (!data.score && !data.comment) {
      res.status(400).send("Informacion no valida");
      return;
    }
    srv.put(id, data, res);
  };

  this.deleteById = (req, res) => {
    var id = req.params.id;
    if (!id) {
      res.status(404).send("Review no encontrado");
      return;
    }
    srv.deleteById(id, res);
  };
  
}

module.exports = Controller;
