const stripe = require("stripe")("sk_test_bbbrbm73dUAQc0cux6B8y4Ex");
var nodemailer = require('nodemailer');

function charge(req, res) {
  const cart = [];
  for (let item of req.body.cart)
    cart.push(item.name);
  const user = req.body.user;
  const adress = user.adress;
    const token = req.body.stripeToken; // Using Express
  stripe.charges.create({
    amount: parseInt(req.body.finalPrice*100),
      currency: 'ils',
    description: 'Example charge',
    source: req.body.stripeToken.id,
    }).then(data => {
      console.log(data['status']);
      res.json({ 'status': data['status'] });
    }).catch(err => {
      res.json({ 'status': 'failed' });
    });
    var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: false,
      tls: {
        rejectUnauthorized: false
      },
      auth: {
        user: 'bina3420@gmail.com',
        pass: 'zehava2075'
      }
    });
    var mailOptions = {
      from: 'bina3420@gmail.com',
      to: 'bina3420@gmail.com',
      subject: "יש לך הזמנה חדשה מאת " + user.firstName + " " + user.lastName,
      text: "שם לקוח: " + '\n' + user.firstName + " " + user.lastName + '\n' + "פרטים ליצירת קשר: " + '\n' + user.mail + '\n' + user.numberPhone + '\n'
        + "כתובת למשלוח ההזמנה: " + adress.street + " " + adress.numHouse + " " + adress.city + " " + '\n'
        + "מיקוד: " + adress.postalCode + '\n' + "פרטי הזמנה: " + products(req.body.cart)
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error + "binushka");
      } else {
        console.log('Email sent: ' + info.response);
      }
      res.send(JSON.stringify({ "ds": "ds" }));

    });
  
}
function products(cart) {
  str = "";
  for (let item of cart) {
    str += '\n' + " מזהה מוצר: " + item._id + " שם מוצר" + item.name + " כמות ממוצר זה: " + item.quantity;
  }
  return str;
}
//--קבלת רשימת המוצרים
//function getProducts(req, res) {
//  var myPromise = new Promise((resolve, reject) => {
//    //--שליפת רשימת הקטגוריות מהשרת
//    dbo.collection("products").find().toArray(function (err, result) {
//      if (err) reject(err);
//      listProducts = result;
//      resolve(result);
//    });
//  });
//  myPromise.then(fromResolve => res.send(JSON.stringify(fromResolve)), err => console.log(err));
//}

exports.charge = charge;
//exports.getProducts = getProducts;
