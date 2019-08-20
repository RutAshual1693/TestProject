'use strict';
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const app = express()
const fs = require("fs");
//const db = require('./db');
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));
var nodemailer = require('nodemailer');
app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
app.post('/sendEmail', function (req, res) {
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
    subject: req.body.name + " מעונין ליצור איתך קשר",
    text: req.body.comment + '\n' + req.body.name + '\n' + req.body.email
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error + "binushka");
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send(JSON.stringify({ "ds": "ds" }));
});
//var multer = require('multer');

//create a cors middleware
//app.use(function (req, res, next) {
//  //set headers to allow cross origin request.
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  next();
//});

var listProducts,listCategories,listProductOptions;
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/machmadleyDB";
require('./server/categories.js');
var dbo;
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  dbo = db.db("machmadleyDB");
});
require('./server/routes/client.routes')(app);

var DIR = './uploads/';

  app.get('/listProducts', function (req, res) {
    getProducts(req, res);
  });
//var upload = multer({ dest: DIR });

//app.use(function (req, res, next) {
//  res.setHeader('Access-Control-Allow-Origin', 'http://valor-software.github.io');
//  res.setHeader('Access-Control-Allow-Methods', 'POST');
//  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//  res.setHeader('Access-Control-Allow-Credentials', true);
//  next();
//});

//app.use(multer({
//  dest: DIR,
//  rename: function (fieldname, filename) {
//    return filename + Date.now();
//  },
//  onFileUploadStart: function (file) {
//    console.log(file.originalname + ' is starting ...');
//  },
//  onFileUploadComplete: function (file) {
//    console.log(file.fieldname + ' uploaded to  ' + file.path);
//  }
//}));

app.get('/api', function (req, res) {
  res.end('file catcher example');
});

app.post('/api', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.end(err.toString());
    }

    res.end('File is uploaded');
  });
});







//---עריכת מוצר---
app.post('/saveProductEditing', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
    dbo.collection("products").updateOne({ _id: new mongo.ObjectID(req.body._id) }, {
      $set:
        {
          name: req.body.product["name"],
          model: req.body.product["model"],
          price: req.body.product["price"],
          quantity: req.body.product["quantity"],
          inStock: req.body.product["inStock"],
          //minQuantityInOrder: req.body.product["minQuantityInOrder"],
          //uniqueNameToLink: req.body.product["uniqueNameToLink"],
          categories: req.body.product["categories"],
          prodDescription: req.body.product["prodDescription"],
          company: req.body.product["company"],
          typeAnimal: req.body.product["typeAnimal"],
          options: req.body.product["options"],
          relatedProducts: req.body.product["relatedProducts"],
        }

    }, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      resolve(listProducts);
    });
  });
  myPromise.then(fromResolve => getProducts(req, res), err => console.log(err));
})
//----עריכת מוןצר - מחיקת קטגוריה מרשימת הקטגוריות במוצר שנבחר

app.post('/deleteCategoryFromProduct', function (req, res) {
  func(0);
  function func(i) {
    console.log(i);
    console.log(req.body[i]);
    if (req.body[i].categories.length == 0) {
      dbo.collection("products").updateOne({ _id: new mongo.ObjectID(req.body[i]._id) }, {
        $set:
          {
            status: "כבוי"
          }

      }, function (err, res2) {
        if (err) throw err;
        console.log("1 document updated");
        if (i < req.body.length - 1)
          func(i + 1);
        else
          getProducts(req, res)
      })
    }
    if (req.body[i].categories.length > 0) {
      console.log(i + "ggggggg" + req.body[i]);
      dbo.collection("products").updateOne({ _id: new mongo.ObjectID(req.body[i]._id) }, {
        $set:
          {
            categories: req.body[i].categories
          }

      }, function (err, res2) {
        if (err) throw err;
        console.log("1 document fff");
        if (i < req.body.length - 1)
          func(i + 1);
        else
          getProducts(req, res)
      })
    }

  }
  //var myPromise = new Promise((resolve, reject) => {
  //  var myquery = { _id: new mongo.ObjectID(req.body._id) };
  //  var newvalues = { $set: { categories: req.body.categories } };
  //  dbo.collection("products").updateOne(myquery, newvalues, function (err, res) {
  //  });
  //});
  //myPromise.then(fromResolve => getProducts(req, res), err => console.log(err));
})
//----עריכת מוןצר - מחיקת קטגוריה מרשימת הקטגוריות במוצר שנבחר

//app.post('/deleteCategoryFromProduct', function (req, res) {
//  var myPromise = new Promise((resolve, reject) => {
//    var myquery = { _id: new mongo.ObjectID(req.body._id) };
//    var newvalues = { $set: { categories: req.body.categories } };
//    dbo.collection("products").updateOne(myquery, newvalues, function (err, res) {
//    });
//  });
//  myPromise.then(fromResolve => getProducts(req, res), err => console.log(err));
//})
//-------הוספת מוצר
//app.post('/addProduct', function (req, res) {
//  var myPromise = new Promise((resolve, reject) => {
//      dbo.collection("products").insertOne(req.body, function (err, res) {
//        if (err) reject(err)
//        console.log("1 category inserted");     
//        resolve(res);
//    });
//  });
//  myPromise.then(fromResolve => getProducts(req, res), err => console.log(err));
//});
app.post('/addProduct', function (req, res, next) {
  let imgObj = req.body.img;
  let imgPath = path.join(__dirname, 'images',imgObj.filename); 
  let bas64Buffer = new Buffer(imgObj.value, "base64");
  fs.writeFile(imgPath, bas64Buffer, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    let myPromise = new Promise((resolve, reject) => {
      delete req.body.img;
      req.body.imgPath = imgObj.filename;
      dbo.collection("products").insertOne(req.body, function (err, res) {
        if (err) reject(err);
        console.log("1 product inserted");
        resolve(res);
      });
    });

    myPromise.then(fromResolve => getProducts(req, res), err => console.log(err));
  });
});


//listSale
var listSale;
function getSales(req, res) {
  var myPromise = new Promise((resolve, reject) => {
    //--שליפת רשימת הלקוחות מהשרת
    dbo.collection("sales").find().toArray(function (err, result) {
      if (err) reject(err);
      listSale = result;
      //console.log(result);
      resolve(result);
    });
  });
  myPromise.then(fromResolve => res.send(JSON.stringify(fromResolve)), err => console.log(err));
}
//----שליחת רשימת הלקוחות ללקוח
app.get('/listSales', function (req, res) {
  getSales(req, res);
});


//addSale
app.post('/addSale', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
    dbo.collection("sales").insertOne(req.body, function (err, res) {
      if (err) reject(err);
      console.log("1 sale inserted");
      resolve(res);
    })
  })
  myPromise.then(fromResolve => getSales(req, res), err => console.log(err));
})
app.post('/editSale', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
    dbo.collection("sales").updateOne({ _id: new mongo.ObjectID(req.body._id) }, {
      $set:
        {
          nameSale: req.body["nameSale"],
          kindDiscount: req.body["kindDiscount"],
          status: req.body["status"],
          scope: req.body["scope"],
          countDiscount: req.body["countDiscount"],
          selectedProducts: req.body["selectedProducts"] 
        }

    }, function (err, res) {
      if (err) reject(err);
      console.log("1 sale updated");
      resolve(res);
    })
  })
  myPromise.then(fromResolve => getSales(req, res), err => console.log(err));
})
app.post('/deleteSale', function (req, res) {
  dbo.collection("sales").deleteOne({ _id: new mongo.ObjectID(req.body._id) }, function (err, res2) {
      if (err) reject(err);
      console.log("1 sale deleted");
      getSales(req, res)
    })
})
//var multer = require('multer');
//// set the directory for the uploads to the uploaded to
//var DIR = './images/';
////define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
//var upload = multer({ dest: './images/' });
//var type = upload.single('photo');


//app.post('/uploadImage', type, function (req, res, next) {
//  var path = '';
//  var fileName = (new Date().getTime()).toString();
//  upload(req, res, function (err) {
//    if (err) {
//      // An error occurred when uploading
//      console.log(err);
//      return res.status(422).send("an Error occured")
//    }
//    // No error occured.
//    path = req.file.path;
//    return res.send("Upload Completed for " + path);
//  });
//})
//--קבלת רשימת המוצרים
function getProducts(req, res) {
  var myPromise = new Promise((resolve, reject) => {
      //--שליפת רשימת הקטגוריות מהשרת
      dbo.collection("products").find().toArray(function (err, result) {
        if (err) reject(err);
        listProducts = result;
        resolve(result);
      });
  });
  myPromise.then(fromResolve => res.send(JSON.stringify(fromResolve)), err => console.log(err));
}


app.post('/deleteProduct', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
    console.log("lllllll" + req.body._id);
    dbo.collection("products").deleteOne({ _id: new mongo.ObjectID(req.body._id) }, function (err, obj) {
      if (err) reject(err);
      console.log("1 document deleted");
      resolve(listProducts);
    });
  });
  myPromise.then(fromResolve => getProducts(req, res), err => console.log(err));
}
)
   //********************************************************************************
   //********קטגוריות***************************************************************
  //*********************************************************************************


//---שליחת רשימת הקטגוריות ללקוח
app.get('/listCategories', function(req, res) {
    getCategories(req, res);
});
function getCategories(req, res) {
  var myPromise = new Promise((resolve, reject) => {  
      //--שליפת רשימת הקטגוריות מהשרת
      dbo.collection("categories").find().toArray(function (err, result) {
        if (err) reject(err);
        listCategories = result;
        console.log(result);   
        resolve(result);
    });
  });
  myPromise.then(fromResolve => res.send(JSON.stringify(fromResolve)) , err => console.log(err));
}
//--מחיקת קטגוריה------------------
app.post('/deleteCategories', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
    dbo.collection("categories").deleteOne({ _id: new mongo.ObjectID(req.body._id) }, function (err, obj) {
       if (err) reject(err);
       console.log("1 document deleted");
       //dbo.collection("categories").find().toArray(function (err, result) {
       //  if (err) reject(err);
       //  listCategories = result;
       //  console.log(result);     
         resolve(obj);
  });
  });
  myPromise.then(fromResolve => getCategories(req, res), err => console.log(err));     
});
//------הוספת קטגוריה------------------
app.post('/addCategory', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
      dbo.collection("categories").insertOne(req.body, function (err, res) {
        if (err) reject(err);
        console.log("1 category inserted");    
        resolve(res);
      });
    });
  myPromise.then(fromResolve => getCategories(req, res), err => console.log(err));
});
app.get('/listProductOptions', function (_req, res) {
  getProductOptions(_req, res);
});
function getProductOptions(req, res)
{
var myPromise = new Promise((resolve, reject) => {
      dbo.collection("productOptions").find().toArray(function (err, res) {
        if (err) reject(err);
        resolve(res);
      });
  });
  myPromise.then(fromResolve => res.send(JSON.stringify(fromResolve)), err => console.log(err));
}
app.post('/editCategory', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
    dbo.collection("categories").updateOne({ _id: new mongo.ObjectID(req.body._id) }, { $set: { name: req.body.category.name, types: req.body.category.types} }, function (err, obj) {
      if (err) reject(err);
      console.log("1 category updated");
      resolve(listProducts);
    });
  });
  myPromise.then(fromResolve => getCategories(req, res), err => console.log(err));
}
)
//***********************************************************************
////********אפשרויות מוצר*************************************************
//***********************************************************************
//-מחיקת אופציה
app.post('/deleteOption', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
      dbo.collection("productOptions").deleteOne({ name: req.body.name }, function (err, obj) {
        if (err) reject(err);
        console.log("1 document deleted");
        dbo.collection("productOptions").find().toArray(function (err, result) {
          if (err) reject(err);
          listProductOptions = result;
          console.log(result);
          resolve(result);
        });  
    });
  });
  myPromise.then(fromResolve => res.send(JSON.stringify(fromResolve)), err => console.log(err));
});
//--מחיקת ערך אחד מאפשרות מוצר
app.post('/deleteValue', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {  
    var myquery = { _id: new mongo.ObjectID(req.body._id) };
    var newvalues = { $set: { name: req.body.name,values: req.body.values } };
    dbo.collection("productOptions").updateOne(myquery, newvalues, function (err, res) {
    });
  });
    myPromise.then(fromResolve => getProducts(req,res), err => console.log(err));
})
//*******************************************************************************
//**************לקוחות**********************************************************
//******************************************************************************
var listCustomers;
function getCustomers(req, res) {
  var myPromise = new Promise((resolve, reject) => {
    //--שליפת רשימת הלקוחות מהשרת
    dbo.collection("customers").find().toArray(function (err, result) {
      if (err) reject(err);
      listCustomers = result;
      console.log(result);
      resolve(result);
    });
  });
  myPromise.then(fromResolve => res.send(JSON.stringify(fromResolve)), err => console.log(err));
}
//----שליחת רשימת הלקוחות ללקוח
app.get('/listCustomers', function (req, res) {
  getCustomers(req, res);
});
//----
app.post('/addCustomer', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
    dbo.collection("customers").insertOne(req.body, function (err, result) {
      if (err) reject(err);
      console.log("1 Customer inserted");
      resolve(result);
    });
  });
  myPromise.then(fromResolve => getCustomers(req, res), err => console.log(err));
});
////---
app.post('/deleteCustomer', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
    dbo.collection("customers").deleteOne({ _id: new mongo.ObjectID(req.body._id) }, function (err, obj) {
      if (err) reject(err);
      console.log("1 customer deleted");
      resolve(obj);
    });
  });
  myPromise.then(fromResolve => getCustomers(req, res), err => console.log(err));
}
)

app.post('/editCustomer', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
    dbo.collection("customers").updateOne({ _id: new mongo.ObjectID(req.body._id) }, {
      $set:
        {
          firstName: req.body.customer["firstName"],
          lastName: req.body.customer["lastName"],
          registrationDate: req.body.customer["registrationDate"],
          mail: req.body.customer["mail"], password: req.body.customer["password"],
          confirmPassword: req.body.customer["confirmPassword"]
        }
    }, function (err, obj) {
      if (err) reject(err);
      console.log("1 customer updated");
      resolve(listCustomers);
    });
  });
  myPromise.then(fromResolve => getCustomers(req, res), err => console.log(err));
}
)
//*******************************************************************************
//**************לקוחות**********************************************************
//******************************************************************************
var listTypes, storeSetting;
function getTypes(req, res) {
  var myPromise = new Promise((resolve, reject) => {
    //--שליפת רשימת הלקוחות מהשרת
    dbo.collection("typeAnimal").find().toArray(function (err, result) {
      if (err) reject(err);
      listTypes = result;
      console.log(result);
      resolve(result);
    });
  });
  myPromise.then(fromResolve => res.send(JSON.stringify(fromResolve)), err => console.log(err));
}
//----שליחת רשימת הלקוחות ללקוח
app.get('/listTypes', function (req, res) {
  getTypes(req, res);
});

app.post('/addProductOption', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
    dbo.collection("productOptions").insertOne(req.body, function (err, res) {
      if (err) reject(err);
      console.log("1 productOption inserted");
      resolve(res);
    });
  });
  myPromise.then(fromResolve => getProductOptions(req, res), err => console.log(err));
});

// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:


app.post('/addParentCategory', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
    dbo.collection("typeAnimal").insertOne(req.body, function (err, res) {
      if (err) reject(err);
      console.log("1 parent category inserted");
      resolve(res);
    });
  });
  myPromise.then(fromResolve => getTypes(req, res), err => console.log(err));
});
app.post('/deleteParentCategory', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
    dbo.collection("typeAnimal").deleteOne({ _id: new mongo.ObjectID(req.body._id) }, function (err, obj) {
      if (err) reject(err);
      console.log("1 deleteParentCategory deleted");
      resolve(obj);
    });
  });
  myPromise.then(fromResolve => getTypes(req, res), err => console.log(err));
}
)

app.post('/editParentCategory', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
    dbo.collection("typeAnimal").updateOne({ _id: new mongo.ObjectID(req.body._id) }, { $set: { name: req.body.name} }, function (err, obj) {
      if (err) reject(err);
      console.log("1 parent category updated");
      resolve(listProducts);
    });
  });
  myPromise.then(fromResolve => getTypes(req, res), err => console.log(err));
}
)
//-------------------------------
app.get('/getStoreSetting', function (req, res) {
  getStoreSetting(req, res);
});
app.post('/editStoreSetting', function (req, res) { 
  dbo.collection("storeSetting").updateOne({ _id: new mongo.ObjectID(req.body._id) }, {
    $set: {
      nameStore: req.body.nameStore,
      nameAdmin: req.body.nameAdmin,
      adress: req.body.adress,
      email: req.body.email,
      geographicCode: req.body.geographicCode,
      numberPhone: req.body.numberPhone,
      fax: req.body.fax,
      contact: req.body.contact,
      openingHours: req.body.openingHours,
      hotProducts: req.body.hotProducts,
      customerSay: req.body.customerSay,
      about: req.body.about,

    }
  }, function (err, obj) {
      if (err) reject(err);
      console.log("store setting updated");
    getStoreSetting(req, res);
    });
}
)
function getStoreSetting(req, res) {
  dbo.collection("storeSetting").find().toArray(function (err, result) {
    if (err) reject(err);
    storeSetting = result;
    console.log(result);
    res.send(JSON.stringify(result));
  });
}
//---------------------------------------
//------הזמנות--------------------------
//---------------------------------------
app.post('/addOrder', function (req, res) {     
    dbo.collection("orders").insertOne(req.body, function (err, res2) {
      if (err) reject(err);
      console.log("1 order inserted");
      getOrdersList(req, res);
  });
});
app.get('/getOrdersList', function (req, res) {
  getOrdersList(req, res);
});
var ordersList;
function getOrdersList(req, res) {
  dbo.collection("orders").find().toArray(function (err, result) {
    if (err) reject(err);
    ordersList = result;
    console.log(result);
    res.send(JSON.stringify(result));
  });
}
//---------------------------------------------
//--------מנהל--------------------------------
//---------------------------------------------
var administrator;
function getAdministrator(req, res) {
  dbo.collection("loginAdministrator").find().toArray(function (err, result) {
    if (err) reject(err);
    administrator = result;
    console.log(result);
    res.send(JSON.stringify(result));
  });
}
app.get('/administrator', function (req, res) {
  getAdministrator(req, res);
});
