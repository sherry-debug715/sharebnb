const express = require('express');
const asyncHandler = require('express-async-handler');

const { Spot, Booking } = require('../../db/models')
const router = express.Router();

router.get('/',  asyncHandler(async(req, res) => {
    const booking = await Booking.findAll({
        include: Spot
    })
    return res.json(booking);
}));

router.post('/', asyncHandler(async(req, res) => {
    const { userId, spotId, startDate, endDate, guestNumber } = req.body;
    const newBooking = await Booking.create({
        userId,
        spotId,
        startDate,
        endDate,
        guestNumber
    });
    res.json(newBooking)
}));

module.exports = router;
