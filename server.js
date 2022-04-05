
const config = require("config")

const express = require("express"); 

const app = express();
app.use(express.urlencoded({ extended: true }));

let port = config.get("server.port");

const bandasRoute = require("./routes/bandas-rock")
bandasRoute(app,config);
const produtosRoute = require("./routes/produtos")
produtosRoute(app,config);

app.listen(port,function() {
    console.log("Servidor iniciado e escutando na porta "+port);
});

