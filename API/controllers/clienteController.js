const Clientes = require("../models/Cliente");

//Agrega un nuevo cliente

exports.nuevoCliente = async (req, res, next) => {
  const cliente = new Clientes(req.body);
  try {
    await cliente.save();
    res.json({
      Cve_Error: 0,
      Cve_Mensaje: cliente,
    });
  } catch (error) {
    
    res.json({
        Cve_Error:-1,
        Cve_Mensaje:error
     })
    next();
  }
};

//Muestra todos los clientes

exports.mostrarClientes = async (req, res, next) => {
  try {
    const clientes = await Clientes.find({});
    res.json({
      Cve_Error: 0,
      Cve_Mensaje: clientes,
    });
  } catch (error) {
    res.json({
      Cve_Error: -1,
      Cve_Mensaje: "Error ",
    });
    next();
  }
};

//Mostrar un cliente por su ID

exports.mostrarCliente = async (req, res, next) => {
  const cliente = await Clientes.findById(req.params.idCliente);
  if (!cliente) {
    res.json({ mensaje: "Ese cliente no existe" });
    next();
  }
  res.json({
    Cve_Error: 0,
    Cve_Mensaje: cliente,
  });
};

//Actualizar cliente
exports.actualizarCliente = async (req, res, next) => {
  try {
    const cliente = await Clientes.findById(req.params.idCliente);
    Object.assign(cliente, req.body);
    cliente.save();
    res.send({
      Cve_Error: 0,
      Cve_Mensaje: cliente,
    });
  } catch (error) {
    res.json({
      Cve_Error: -1,
      Cve_Mensaje: "Error ",
    });
    next();
  }
};
