const express = require('express');
const asyncHandler = require('express-async-handler');

const {Spot, Image} = require('../../db/models')
const router = express.Router();

// show a list of all spots
router.get('/',  asyncHandler(async(req, res) => {
    const spots = await Spot.findAll({
        include: Image
    });
    // console.log(spots);
    res.json(spots);
  }));

//see the details of a spot
router.get('/:spotId(\\d+)', asyncHandler(async(req, res) => {
const id = req.params.spotId;
const spotInfo = await Spot.findByPk(id)
// console.log("this is spot id=======>" + id);
// console.log("this is spot spotInfo=======>" + spotInfo);
res.json(spotInfo);
}));

//user can add an spot
router.post('/', asyncHandler(async(req, res) => {
    const { userId, city, state, name, price, url1, url2, url3, url4, url5} = req.body;
    const newSpot = await Spot.create({
        userId,
        city,
        state,
        name,
        price
    });
    // console.log("==========>" + newSpot.id);
    const newImage = await Image.create({
        spotId:newSpot.id,
        url1,
        url2,
        url3,
        url4,
        url5,
    });
    console.log("=======================>" + newImage);
    return res.redirect(`/api/spots/${newSpot.id}`);
}));

// user can edit an spot
router.put('/:spotId(\\d+)/edit', asyncHandler(async(req, res) => {
    const spotId = +req.params.spotId;
    const spotForEdit = await Spot.findByPk(spotId);
    const imageForEdit = await Image.findOne({
        where: {spotId: spotId}
    })

    const { userId, city, state, name, price, url1, url2, url3, url4, url5} = req.body;
    await spotForEdit.update({
        userId,
        city,
        state,
        name,
        price
    })
    await imageForEdit.update({
        spotId,
        url1,
        url2,
        url3,
        url4,
        url5,
    });
    res.json({spotForEdit, imageForEdit}) // use ADD_SPOT
}));

//Delete an spot
router.delete("/:spotId(\\d+)", asyncHandler(async function (req, res) {
    const spotId = +req.params.spotId;
    const spotforDelete = await Spot.findByPk(spotId);
    const imageForDelete = await Image.findOne({
        where: {spotId: spotId}
    })
    if(!spotforDelete) throw new Error(`Cannot find the spot information ${spotforDelete}`);
    if(!imageForDelete) throw new Error(`Cannot find the spot information ${imageForDelete}`);
    await Spot.destroy({ where: { id: spotId}});
    await Image.destroy({ where: { id: spotId}});
    const refreshedSpots = await Spot.findAll();
    const refreshedImages = await Image.findAll();
    res.json({refreshedSpots, refreshedImages})
}));

module.exports = router;
