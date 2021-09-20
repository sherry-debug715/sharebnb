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

router.delete("/:bookingId(\\d+)", asyncHandler(async function(req, res) {
    const bookingId = + req.params.bookingId;
    const deleteBooking = await Booking.findByPk(bookingId);
    if(!deleteBooking) throw new Error(`Cannot find the booking information ${deleteBooking}`);
    await Booking.destroy({where: {id: bookingId}});
    const refreshedProfile = await Booking.findAll();
    res.json(refreshedProfile);
}));

router.put("/:bookingId(\\d+)/edit", asyncHandler(async(req, res) => {
    const bookingId = +req.params.bookingId;
    // console.log("this is booking id==========>", bookingId)
    const bookingForEdit = await Booking.findByPk(bookingId);
    // console.log("this is bookingforEdit==========>", bookingForEdit)
    const { spotId, userId, startDate, endDate, guestNumber} = req.body;
    await bookingForEdit.update({
        spotId,
        userId,
        startDate,
        endDate,
        guestNumber
    });
    res.json({bookingForEdit})
}))

module.exports = router;
