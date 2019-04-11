var db = require("../util/db");
var reviewsService = require("./reviews");
var revSrvc = new reviewsService();
function Service() {
  this.getAll = async (req, res) => {
    var query =
      "SELECT s.id, s.name, s.image, s.address, s.lat, s.lon, s.phone, s.type, s.description, s.hours, AVG(r.score) as score FROM shops s LEFT JOIN reviews r ON s.id = r.shop_id GROUP BY s.id;";
    var result = await db.query(query);
    var response = [];
    for (var i = 0; i < result.length; i++) {
      response.push({
        id: result[i].id,
        name: result[i].name,
        image: result[i].image,
        address: result[i].address,
        lat: result[i].lat,
        lon: result[i].lon,
        phone: result[i].phone,
        type: result[i].type,
        description: result[i].description,
        hours: result[i].hours,
        rating: result[i].score
      });
    }
    return response;
  };

  this.getById = async (id, res) => {
    var query =
      "SELECT s.id, s.name, s.image, s.address, s.lat, s.lon, s.phone, s.type, s.description, s.hours, AVG(r.score) as score FROM shops s JOIN reviews r ON s.id = r.shop_id WHERE s.id=" +
      id +
      " GROUP BY r.shop_id;";
    var result = await db.query(query);
    return {
      id: result[0].id,
      name: result[0].name,
      image: result[0].image,
      address: result[0].address,
      lat: result[0].lat,
      lon: result[0].lon,
      phone: result[0].phone,
      type: result[0].type,
      description: result[0].description,
      hours: result[0].hours,
      rating: result[0].score
    };
  };

  this.getLocalByName = async (req, res) => {

    var query =
      "SELECT s.id, s.name, s.image, s.address, s.lat, s.lon, s.phone, s.type, s.description, s.hours, AVG(r.score) as score FROM shops s JOIN reviews r ON s.id = r.shop_id WHERE"+
      " s.name like '" + req.params.name + "%' GROUP BY r.shop_id;" 

    var result = await db.query(query);

   return JSON.parse(JSON.stringify(result));
  };

  this.post = async (req, res) => {
    var query =
      "INSERT INTO shops (name, image, address, lat, lon, phone, type, description, hours) VALUES (?,?,?,?,?,?,?,?,?);";
    var result = await db.query(
      query,
      [
        req.body.name,
        req.file.path,
        req.body.address,
        req.body.lat,
        req.body.lon,
        req.body.phone,
        req.body.type,
        req.body.description,
        req.body.hours
      ],
      function(error, results, fields) {
        if (error) {
          console.log("hubo un error en la consulta POST", error.message);
          return res.status(404).send("Hubo un error en la consulta POST");
        }
        res.status(200).send(JSON.stringify(results));
      }
    );
    return result;
  };

  this.put = async (req, res) => {
    var query = ` UPDATE shops SET name = ?, image = ?, 
                  address = ?, lat = ?, lon = ?,
                  phone = ?, type = ?, description = ?, 
                  hours = ? WHERE id = ? ;`;
    var data = [
      req.body.name,
      req.file.path,
      req.body.address,
      req.body.lat,
      req.body.lon,
      req.body.phone,
      req.body.type,
      req.body.description,
      req.body.hours,
      req.params.id
    ];
    var result = await db.query(query, data, function(error, results, fields) {
      if (error) {
        console.log("hubo un error en la consulta PUT", error.message);
        return res.status(404).send("Hubo un error en la consulta POST");
      }
      res.status(200).send(JSON.stringify(results));
    });
    return result;
  };

  this.deleteById = async (req, res) => {
    var id = req.params.id;
    var query = "DELETE FROM shops WHERE id = ?";

    var result = await db.query(query, [id], function(error, results, fields) {
      if (error) {
        console.log("hubo un error en la consulta delteById", error.message);
        return res.status(404).send("Hubo un error en la consulta delteById");
      }
      return res.status(200).send(JSON.stringify(results));
    });
    return result;
  };
}

module.exports = Service;
