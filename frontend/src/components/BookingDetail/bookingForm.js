// import { useSelector, useDispatch  } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { Link, useParams, useHistory } from 'react-router-dom';
// import { getSpots } from '../../store/spotsDisplay';
// import { createBooking } from '../../store/bookingStore';

// const BookingForm = () => {

//     const dispatch = useDispatch();
//     const history = useHistory();
//     const spotArray = useSelector(state => {
//         return state.spot.list;
//     });
//     const currentUser = useSelector((state) => state.session.user);
//     console.log("================>", spotArray);
//     const spotId = spotArray.find(spot => spot.id === )

//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setEndDate] = useState(new Date());
//     const [guestNumber, setGuestNumber] = useState(1);

//     const reset = () => {
//         setStartDate(new Date());
//         setEndDate(new Date());
//         setGuestNumber(1);
//     }

//     const bookingFormSubmit = async(e) => {
//         e.preventDefault();

//         let createdBooking = {
//             userId: currentUser?.id,
//             spotId: spotArray?.id,
//             startDate,
//             endDate,
//             guestNumber
//         }

//         const newBooking = await dispatch(createBooking(createdBooking));

//         if(newBooking) {
//             return history.push(`/booking/${newBooking.id}`)
//         }
//         reset();
//     }

//     return (
//         <section className="booking-detail-holder">
//             <h1>This is booking form</h1>
//             <form>
//                 <div className="price-per-night">
//                     {/* {spot.price} */}
//                 </div>
//             </form>
//         </section>


//     )
// }

// export default BookingForm;
