var service = require("../services/reviews");

var srv = new service();

function Controller() {

  this.getByShop = (req, res) => {
    var id = req.params.id;

    if (!id) {
      res.status(404).send("Local no encontrado");
      return;
    }
    srv.getByShop(id,res);
  };

  this.getByUser = (req, res) => {
    var id = req.params.id;

    if (!id) {
      res.status(404).send("User no encontrado");
      return;
    }
    srv.getByUser(id,res);
  };

  this.post = (req, res) => {
    srv.post(req.body);
  };

  this.put = (req, res) => {
    var id = req.body.id;
    if (!id) {
      res.status(404).send("Review no encontrado");
      return;
    }
    srv.put(req.body);
  };

  this.deleteById = (req, res) => {
    var id = req.body.id;

    if (!id) {
      res.status(404).send("Review no encontrado");
      return;
    }
    srv.deleteById(id);
  };
}

module.exports = Controller;
