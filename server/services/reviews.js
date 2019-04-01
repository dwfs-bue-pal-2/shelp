var db = require("../util/db");

function Service() {
  this.getByShop = (id, res) => {
    var query =
      "SELECT u.name as user, s.name as shop, score, comment, date FROM reviews r JOIN shops s ON shop_id=s.id JOIN users u ON user_id=u.id WHERE shop_id = " +
      id +
      " AND r.active=1;";
    db.query(query, (error, resp) => {
      if (error) {
        res.status(500).send("Error en la base de datos");
      }
      res.status(200).send(resp);
    });
  };
  this.getByUser = (id, res) => {
    var query =
      "SELECT u.name as user, s.name as shop, score, comment, date FROM reviews r JOIN shops s ON shop_id=s.id JOIN users u ON user_id=u.id WHERE user_id = " +
      id +
      " AND r.active=1;";
    db.query(query, (error, resp) => {
      if (error) {
        res.status(500).send("Error en la base de datos");
      }
      res.status(200).send(resp);
    });
  };

  this.post = (params, res) => {
    var query =
      "INSERT INTO reviews (user_id, shop_id, score, comment) VALUES (" +
      params.user +
      "," +
      params.shop +
      "," +
      params.score +
      ",'" +
      params.comment +
      "');";
    db.query(query, (error, resp) => {
      if (error) {
        res.status(500).send("Error en la base de datos");
      }
      res.status(200).send("Agrega un nuevo review");
    });
  };

  this.put = (id, params, res) => {
    var multipleParams = false;
    var query = "UPDATE reviews SET";
    if (params.score) {
      multipleParams = true;
      query = query.concat(" score=" + params.score);
    }
    if (params.comment) {
      if (multipleParams) {
        query = query.concat(", comment='" + params.comment + "'");
      } else {
        query = query.concat(" comment='" + params.comment + "'");
      }
    }
    query = query.concat(" WHERE id=" + id + ";");
    db.query(query, (error, resp) => {
      if (error) {
        res.status(500).send("Error en la base de datos");
      }
      res.status(200).send("Review editado");
    });
  };

  this.deleteById = (id, res) => {
    var query = "UPDATE reviews SET active=0 WHERE id=" + id + ";";
    db.query(query, (error, resp) => {
      if (error) {
        res.status(500).send("Error en la base de datos");
      }
      res.status(200).send("Review eliminado");
    });
  };
}

module.exports = Service;
