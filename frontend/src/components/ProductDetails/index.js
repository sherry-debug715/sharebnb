import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { deleteSpot, getSpots } from '../../store/spotsDisplay';
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import './spotDetail.css';
import { createBooking } from '../../store/bookingStore';
// import StarIcon from "@material-ui/icons/Star";

function ProductDetail() {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const history = useHistory();
    const currentUser = useSelector((state) => state.session.user);
    const spots = useSelector(state => {
        return state.spot.list;
    });

    const [startDate, setStartDate] = useState(false);
    const [endDate, setEndDate] = useState(false);
    const [guestNumber, setGuestNumber] = useState(1);
    const [dayDiff, setDayDiff] = useState(1);


    useEffect(() => {
        dispatch(getSpots());
    }, [dispatch]);

    useEffect(() => {
        if(endDate && startDate) {
            let startDay = new Date(startDate);
            let endDay = new Date(endDate);
            let diffDays = endDay.getDate() - startDay.getDate();
            setDayDiff(diffDays);
        }
    }, [endDate, startDate]);

    if (!spots) {
        return null;
    }

    const deleteOneSpot = e => {
        e.preventDefault();
        dispatch(deleteSpot(e.target.value));
        history.push('/spots')
    }

    const reset = () => {
        setStartDate(false);
        setEndDate(false);
        setGuestNumber(1);
    }

    const bookingFormSubmit = async(e) => {
        e.preventDefault();

        let createdBooking = {
            userId: currentUser?.id,
            spotId,
            startDate,
            endDate,
            guestNumber
        }

        const newBooking = await dispatch(createBooking(createdBooking));

        if(newBooking) {
            return history.push(`/spots`)
        }
        reset();
    }

    // console.log("==============>", endDate)
    // const checkoutDay = endDate.split("-");
    // const checkoutDay = endDate.split("-").join("")
    // console.log("==============>", Number(checkoutDay)-Number(checkinDay));



    return (
        <>
        <div className="spot-detail-wrapper">
            <button value={spotId} className="delete-button" onClick={deleteOneSpot}>delete</button>
            {spots.map(spot => {
                const roomCharge = spot.price * dayDiff;
                if(spotId == spot.id) {
                    // console.log("I'm inside spot.id 1")
                    let url2 = spot?.Images[0]?.url2;
                    let url3 = spot?.Images[0]?.url3;
                    let url4 = spot?.Images[0]?.url4;
                    let url5 = spot?.Images[0]?.url5;
                    return (
                        <div>
                            <Link to={`/spots/${spot.id}/edit`}> Edit </Link>
                            <h2>{spot.name}</h2>
                            <div className="review">review here <span className="spot-detail-address">{spot.city}{`, ${spot.state}, United State`}</span></div>
                            <div className="grid-container">
                                <div className="grid1">
                                        <img className="spot-detail-image2" src={url2} alt={spot.name} />
                                </div>
                                <div className="grid2">
                                            <img className="spot-detail-image3" src={url3} alt={spot.name} />
                                            <img className="spot-detail-image4" src={url4} alt={spot.name} />
                                            <img className="spot-detail-image5" src={url5} alt={spot.name} />
                                </div>
                            </div>
                            <div className="room-description">
                                <p><strong>Entire home</strong></p>
                                <p><strong>Enhanced Clean</strong></p>
                                <p>This host committed to Airbnb's 5-step enhanced cleaning process.</p>
                                <p><strong>Self check-in</strong></p>
                                <p>You can check in with the doorman.</p>
                                <p><strong>Free cancellation 7 days prior to the check-in date</strong></p>
                                <h3>What this place offers</h3>
                                <p>Kitchen</p>
                                <p>Wifi</p>
                                <p>Free parking on premises</p>
                                <p>Shared patio or balcony</p>
                                <p>Indoor fireplace</p>
                                <p>Luggage dropoff allowed</p>
                                <p>Crib</p>
                                <p>Hair Dryer</p>
                            </div>
                            <div className="booking-form-container">
                                <form
                                    className="booking-form"
                                    onSubmit={bookingFormSubmit}
                                >
                                    <div className="price">{`${spot.price} / night`}</div>
                                    <input
                                        type="date"
                                        placeholder="CHECK-IN"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="date"
                                        placeholder="CHECKOUT"
                                        value={endDate}
                                        onChange={e => setEndDate(e.target.value)}
                                        required
                                    />
                                    <select
                                        value={guestNumber}
                                        onChange={e => setGuestNumber(e.target.value)}
                                    >
                                        <option selected value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                    <p>Price detail</p>
                                    <div>
                                        <p>{`$${spot.price} x  ${dayDiff} nights`}</p>
                                        <p>Cleaning fee<span>{`$${roomCharge*0.1}`}</span></p>
                                        <p>Service fee<span>{`$${roomCharge*0.15}`}</span></p>
                                        <p>Total(USD)<span>{`$${(roomCharge*0.25)+(spot.price*dayDiff)}`}</span></p>
                                    </div>
                                    <button type="submit" className="reserveButton">Reserve</button>
                                </form>
                            </div>

                        </div>
                    )
                }
            })}
        </div>
        </>
    )
}

export default ProductDetail;
