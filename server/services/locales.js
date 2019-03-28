var db = require("../util/db");

function Service() {
  
  this.getAll = async (req, res) => {
    var query = "SELECT * FROM shops";
    var result = await db.query(query);
    return result;
  };

  this.post = async (req, res) => {
    var query = "INSERT INTO shops (name, image, addres, phone, type, description, hours) VALUES (?,?,?,?,?,?,?)";
    var newShop = req.body;

    var name = newShop.nombre;
    var img = newShop.imagen;
    var address = newShop.direccion;
    var phone = newShop.telefono;
    var type = newShop.tipo;
    var description = newShop.descripcion;
    var schedule = newShop.horario;

    var result = await db.query(query, [name, img, address, phone, type, description, schedule], 
    
      function(error, results, fields){
        if(error){
            console.log("hubo un error en la consulta POST", error.message);
            return res.status(404).send("Hubo un error en la consulta POST");
        }
       res.status(200).send(JSON.stringify(results));
    });
    return result;
  };

  this.put = async (req, res) => {
    var query = ` UPDATE shops SET name = ? , image = ?, 
                  addres = ?, phone = ?, type = ?, description = ?, 
                  hours = ? WHERE id = ? `;
    var data = [req.body.nombre, req.body.imagen, req.body.direccion, 
                req.body.telefono, req.body.tipo, req.body.descripcion, 
                req.body.horario, req.params.id];

    var result = await db.query(query, data, function(error, results, fields){
      if(error){
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
  
    var result = await db.query(query, [id], function (error, results, fields) {
        if(error){
            console.log("hubo un error en la consulta delteById", error.message);
            return res.status(404).send("Hubo un error en la consulta delteById");
        }
        return res.status(200).send(JSON.stringify(results));
    });
    return result;
  };
}

module.exports = Service;
