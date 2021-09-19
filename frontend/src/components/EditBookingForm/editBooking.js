import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getBookings, editBookings } from '../../store/bookingStore';

const EditBookingForm = () => {

    const dispatch = useDispatch();
    const bookingArray = useSelector(state => {
        return state.booking.newBooking;
    })

    useEffect(() => {
        dispatch(getBookings())
    }, [dispatch]);

    const {bookingId} = useParams();
    const bookingInfo = bookingArray.find(booking => booking.id === +bookingId)
    const [startDate, setStartDate] = useState(false);
    const [endDate, setEndDate] = useState(false);
    const [guestNumber, setGuestNumber] = useState(1);
    const history = useHistory();
    const userId = useSelector((state) => state.session.user.id);

    const reset = () => {
        setStartDate(false);
        setEndDate(false);
        setGuestNumber(1);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log("handleSubmit------------")

        const payload = {
            id:bookingId,
            spotId:bookingInfo.spotId,
            userId,
            startDate,
            endDate,
            guestNumber
        };

        let editedBooking = dispatch(editBookings(payload))
        if(editedBooking) {
            return history.push(`/${userId}/profile`);
        }
        reset();
    };

    return (
        <>
        <h1>Edit Booking</h1>
        <div className="booking-edit-form-holder">
            <form onSubmit={handleSubmit}>
                <div className="check-in">
                    <label htmlFor="checkin-date">Check In Date</label>
                    <input
                        type="date"
                        name="checkin-date"
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)}
                    />
                </div>
                <div className="check-out">
                    <label htmlFor="checkout-date">Check Out Date</label>
                    <input
                        type="date"
                        name="checkout-date"
                        value={endDate}
                        onChange={e => setEndDate(e.target.value)}
                    />
                </div>
                <div className="guest-number">
                    <label htmlFor="guest">Guest Number</label>
                    <select
                        value={guestNumber}
                        onChange={e => setGuestNumber(e.target.value)}
                    >
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <button type="submit" className="edit-booking-Button">Comfirm Edit</button>
            </form>
        </div>
        </>
    )
}

export default EditBookingForm;
