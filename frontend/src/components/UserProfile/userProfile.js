import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom"
import { getBookings, removeBooking } from "../../store/bookingStore";


function UserProfile() {

    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.session.user);
    const currentBookings = useSelector((state) => state.booking.newBooking);
    const { userId } = useParams();
    const history = useHistory();
    let bookingId = 1;

    let bookingDetail = currentBookings?.filter(bookings => bookings.userId == userId );

    useEffect(() => {
        dispatch(getBookings());
    }, [dispatch, bookingDetail]);

    const deleteOneBooking = e => {
        e.preventDefault();
        dispatch(removeBooking(e.target.value));
    }

    const editOneBooking = e => {
        e.preventDefault();
        history.push(`/profile/${bookingId}/edit`)
    }

    return (
        <>
        <h1>Hi, I'm {currentUser.username}</h1>
        <p>{currentUser.email}</p>
        <section>
            <table>
                    <tr>
                        <th>Order Date</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Checkin Date</th>
                        <th>Checkout Date</th>
                        <th>Guest Number</th>
                        <th>Nights of Staying</th>
                        <th>Total Cost</th>
                    </tr>
                        {bookingDetail?.map(booking => {
                            let bookingCreate = new Date(booking.createdAt);
                            let bookingYear = bookingCreate.getFullYear();
                            let bookingMonth = bookingCreate.getMonth();
                            let bookingingDay = bookingCreate.getDate();
                            let bookingDate = `${bookingYear}-${bookingMonth}-${bookingingDay}`
                            let startDay = new Date(booking.startDate);
                            let startYear = startDay.getFullYear();
                            let startMonth = startDay.getMonth();
                            let startingDay = startDay.getDate();
                            let checkinDate = `${startYear}-${startMonth}-${startingDay}`
                            let endDay = new Date(booking.endDate);
                            let checkoutYear = endDay.getFullYear();
                            let checkoutMonth = endDay.getMonth();
                            let checkoutDay = endDay.getDate();
                            let checkoutDate = `${checkoutYear}-${checkoutMonth}-${checkoutDay}`
                            let diffDays = checkoutDay - startingDay;
                            if(diffDays < 0) {
                                diffDays = 1;
                            }
                            let singleDayCost = +booking?.Spot?.price;
                            let totalCost = singleDayCost * (0.25 + diffDays)
                            let currentBookingId = booking.id;
                            bookingId = currentBookingId;
                            return (
                                <>
                                    <tr>
                                        <td scope="col">{bookingDate}</td>
                                        <td scope="col">{booking?.Spot?.name}</td>
                                        <td scope="col">{booking?.Spot?.city}</td>
                                        <td scope="col">{booking?.Spot?.state}</td>
                                        <td scope="col">{checkinDate}</td>
                                        <td scope="col">{checkoutDate}</td>
                                        <td scope="col">{booking.guestNumber}</td>
                                        <td scope="col">{diffDays}</td>
                                        <td scope="col">{`$${totalCost}`}</td>
                                        <button
                                            value={booking.id}
                                            className="delete-button"
                                            onClick={deleteOneBooking}>delete</button>
                                        <button
                                            value={booking.id}
                                            className="edit-button"
                                            onClick={editOneBooking}>edit</button>
                                    </tr>
                                </>
                            )
                        })}
            </table>

        </section>
        </>
    )
}

export default UserProfile;
