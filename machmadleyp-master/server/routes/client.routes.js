module.exports = function (app) {
  let controller = require('../controllers/client.controller');

  app.post('/charge', controller.charge);

  //  //-----שליחת רשימת המוצרים ללקוח
  //app.get('/listProducts', function (req, res) {
  //  getProducts(req, res);
  //});
}
