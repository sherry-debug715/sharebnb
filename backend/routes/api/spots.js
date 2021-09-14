const express = require('express');
const asyncHandler = require('express-async-handler');

const {Spot, Image} = require('../../db/models')
const router = express.Router();

router.get('/spots',  asyncHandler(async function(req, res) {
    const spots = await Spot.findAll({
        include: Image
    });
    // console.log(spots);
    res.json(spots);
  }));
