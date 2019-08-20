'use strict';
var router = require('express').Router();
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));
var listProducts, listCategories, listProductOptions;

  console.log('Example app listening on port jj!');

//---שליחת רשימת הקטגוריות ללקוח
app.get('/listCategories', function (req, res) {
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
  myPromise.then(fromResolve => res.send(JSON.stringify(fromResolve)), err => console.log(err));
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
function getProductOptions(req, res) {
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
    dbo.collection("categories").updateOne({ _id: new mongo.ObjectID(req.body._id) }, { $set: { name: req.body.name } }, function (err, obj) {
      if (err) reject(err);
      console.log("1 category updated");
      resolve(listProducts);
    });
  });
  myPromise.then(fromResolve => getCategories(req, res), err => console.log(err));
}
)

module.exports = router;
