var db = require("../util/db");

function Service() {
  
  this.getAll = async (req, res) => {
    var query = "SELECT * FROM locales";
    var result = await db.query(query);
    return result;
  };

  this.post = async (req, res) => {
    var query = "INSERT INTO locales (nombre, imagen, direccion, telefono, tipo, descripcion, horario, celiacos) VALUES (?,?,?,?,?,?,?,?)";
    var newShop = req.body;
    
    var name = newShop.locales[0].nombre;
    var img = newShop.locales[0].imagen;
    var address = newShop.locales[0].direccion;
    var phone = newShop.locales[0].telefono;
    var type = newShop.locales[0].tipo;
    var description = newShop.locales[0].descripcion;
    var schedule = newShop.locales[0].horario;
    var celiac = newShop.locales[0].celiacos;

    var result = await db.query(query, [name, img, address, phone, type, description, schedule, celiac], 
    
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
    var query = ` UPDATE locales SET nombre = ? , imagen = ?, 
                  direccion = ?, telefono = ?, tipo = ?, descripcion = ?, 
                  horario = ?, celiacos = ? WHERE id_local = ? `;
    var data = [req.body.nombre, req.body.imagen, req.body.direccion, 
                req.body.telefono, req.body.tipo, req.body.descripcion, 
                req.body.horario, req.body.celiacos, req.body.id_local];

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
    var query = "DELETE FROM locales WHERE id_local = ?";
  
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
