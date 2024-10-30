var ruta = require("express").Router();
var {mostrarVentas,nuevaVenta,cancelarVenta,buscarPorId,modificarVenta,borrarVenta}=require("../bd/ventasBD");

ruta.get("/mostrarVentas",async(req,res)=>{
    const ventas=await mostrarVentas();
    res.json(ventas);
});

ruta.get("/buscarPorId/:id", async(req, res)=>{
    var ventaValida= await buscarPorId(req.params.id);
    res.json(ventaValida);
});

ruta.patch("/cancelarVenta/:id",async(req,res)=>{
    var cancelado=await cancelarVenta(req.params.id);
    res.json(cancelado);
});

ruta.post("/nuevaVenta",async(req,res)=>{
    var ventaValida = await nuevaVenta(req.body);
    res.json(ventaValida);
})

ruta.post("/modificarVenta/:id",async(req,res)=>{
    var ventaValido = await modificarVenta(req.params.id, req.body);
    res.json(ventaValido);
})

ruta.delete("/borrarVenta/:id",async(req,res)=>{
    var borrado=await borrarVenta(req.params.id);
    res.json(borrado);
});

module.exports=ruta;