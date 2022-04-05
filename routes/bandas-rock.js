

module.exports = function(app,config) {
    const controllerFactory = require("../controllers/bandas-rock")
    const controller = controllerFactory()
    const rota = config.get("server.path_root")+"bandas";
    console.log("rota configurada: ",rota);

    app.route(rota).get(controller.list)
    app.route(rota).post(controller.add)
    app.route(rota).patch(controller.update)
    app.route(rota).delete(controller.remove)

}