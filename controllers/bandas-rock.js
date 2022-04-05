module.exports = function () {
  const data = require("../data/bandas-rock.json");

  const controller = {
    list: function (req, res) {
      console.log("Controller LIST");
      res.status(200).json(data);
    },

    add: function (req, res) {
      console.log("Controller ADD req.body: ",req.body);
      let obj = {
        id: req.body.id,
        name: req.body.name,
        country: req.body.country,
        style: req.body.style,
      }
      data.produtos[obj.id] = obj;
      res.status(200).json(data);
    },

    update: function (req, res) {
      console.log("Controller UPDATE req.body: ",req.body);
      let obj = {
        id: req.body.id,
        name: req.body.name,
        country: req.body.country,
        style: req.body.style,
      }
      data.produtos[obj.id] = obj;
      res.status(200).json(data);
    },

    remove: function (req, res) {
      console.log("Controller REMOVE req.body: ",req.body);
      let id = req.body.id;
      delete data.produtos[id];
      res.status(200).json(data);
    },
  };

  return controller;
};
