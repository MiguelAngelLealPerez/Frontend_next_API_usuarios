const admin = require("firebase-admin");
const keys=require("../keys.json");


admin.initializeApp({
    credential:admin.credential.cert(keys)
});

const bd=admin.firestore();
const usuarios=bd.collection("ejemplobd");
const productos=bd.collection("producto");
const ventas=bd.collection("ventas");

module.exports={
usuarios,
productos,
ventas
}
