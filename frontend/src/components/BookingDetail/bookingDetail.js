import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { getSpots } from '../../store/spotsDisplay';
import { getBookings } from '../../store/bookingStore';

// need the room name, price, startDate, and endDate
const BookingDetail = () => {
    const spotArray = useSelector(state => {
        return state.spot.list;
    });
    const bookingArray = useSelector(state => {
        return state.booking.newBooking;
    });
    const currentUser = useSelector((state) => state.session.user);
    // console.log("================>", bookingArray);
    const { spotId } = useParams();
    const { bookingId } = useParams();
    const history = useHistory();

    const currentSpot = spotArray.find(spot => spot.id === +spotId)
    let currentBooking = bookingArray.find(booking => booking.id === +bookingId)
    console.log('this is spot=====================>', currentSpot)


    return (
        <section className="booking-detail-holder">
            <h1>Confirm and pay</h1>
            <form>
                <div className="price-per-night">
                    {/* {spot.price} */}
                </div>
            </form>
        </section>


    )
}

export default BookingDetail
