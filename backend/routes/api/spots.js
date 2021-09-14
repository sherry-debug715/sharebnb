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
router.get('/:spotId', asyncHandler(async(req, res) => {
const id = req.params.spotId;
const spotInfo = await Spot.findByPk(id)
res.json(spotInfo);
}));

//user can add an spot
router.post('/:userId/spots', asyncHandler(async(req, res) => {
    const { userId, city, state, name, price} = req.body;
    await Spot.create({
        userId,
        city,
        state,
        name,
        price
    })
    res.redirect(`/spots/${spotId}`);
}));

// user can edit an spot
router.patch('/:userId/spots/:spotId/edit', asyncHandler(async(req, res) => {
    const id = req.body.id;
    await Spot.update(
        
    )
    // const { userId, city, state, name, price} = req.body;
    // await Spot.update({
    //     userId,
    //     city,
    //     state,
    //     name,
    //     price
    // })
    res.redirect(`/spots/${spotId}`);
}));

//Delete an spot
router.delete("/:userId/spots/:spotId/delete", asyncHandler(async function (req, res) {
    const spot = await Spot.findByPk(req.params.id);
    if(!spot) throw new Error('Cannot find item');
    const spotId = spot.id;
    await Spot.destroy({ where: { id: spotId}});
    res.redirect(`/`);
}));

module.exports = router;
