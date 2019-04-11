var service = require("../services/locales");

var srv = new service();

function Controller() {
  this.getAll = async (req, res) => {
    var result = await srv.getAll(req, res);
    res.status(200).send(JSON.stringify(result));
  };

  this.getById = async (req, res) => {
    var id = req.params.id;
    if (!id) {
      res.status(404).send("Local no encontrado");
      return;
    }
    var result = await srv.getById(id, res);
    res.status(200).send(JSON.stringify(result));
  };

  this.post = async (req, res) => {
    var result = await srv.post(req, res);
    res.status(200).send(JSON.stringify(result));
  };

  this.put = async (req, res) => {
    var result = await srv.put(req, res);
    res.status(200).send(JSON.stringify(result));
  };

  this.deleteById = async (req, res) => {
    var result = await srv.deleteById(req, res);
    res.status(200).send(JSON.stringify(result));
  };

  this.getLocalByName = async (req, res) => {
    var result = await srv.getLocalByName(req, res);
    res.status(200).send(JSON.stringify(result));
  };
}

module.exports = Controller;
