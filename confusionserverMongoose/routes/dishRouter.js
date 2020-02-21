const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Dishes = require("../models/dishes");

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());
/*
dishRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("will send all dishes to you");
  })
  .post((req, res, next) => {
    res.end(
      "will add the dish : " +
        req.body.name +
        "with details : " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("put operation not supported on /dishes");
  })
  .delete((req, res, next) => {
    res.end("deleting all dishes");
  });
module.exports = dishRouter;
*/
dishRouter.use(bodyParser.json());
dishRouter
  .route("/")
  .get((req, res, next) => {
    Dishes.find({})
      .then(
        dishes => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(dishes);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .post((req, res, next) => {
    Dishes.create(req.body)
      .then(
        dish => {
          console.log("Dish created", dish);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(dish);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("put operarion not supported on/dishe");
  })
  .delete((req, res, next) => {
    Dishes.findByIdAndRemove(req.params.dishId)
      .then(
        resp => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(resp);
        },
        err => next(err)
      )
      .catch(err => next(err));
  });

module.exports = dishRouter;
