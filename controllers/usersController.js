const db = require("../models");

// Defining methods for the POSController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("Created User", req.body);
    //add validation for creation
    db.User
      .create(req.body)
      .then(results => res.json(results))
      .catch(err => {
        console.log("err", err);
        res.status(422).json(err)
      });
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(results => results.remove())
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  },

  login: function (req, res) {
    if(req.body.email == null || req.body.password == null) {
      res.json({error: "Fill in Email/Password"})
    }
    db.User
      .findOne({ email: req.body.email })
      .then(results => {
        console.log("results", results);
        console.log("req.body", req.body);
        if(results === null) {
          console.log("User not found!");
          res.json({error: "User not found!", login: false})
        } else if(req.body.password == results.password) {
          console.log("User logged in: " + results._id);
          res.json({login: true, _id: results._id, restaurantID: results.restaurantID});
        } else {
          console.log("Incorrect password!");
          res.json({error: "Incorrect password!", login: false})
        }
      })
  }
};
