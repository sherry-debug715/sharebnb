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

    return (
        <>
        <div className="spot-detail-wrapper">
            {spots.map(spot => {
                const roomCharge = spot.price * dayDiff;
                if(spotId == spot.id) {
                    let url2 = spot?.Images[0]?.url2;
                    let url3 = spot?.Images[0]?.url3;
                    let url4 = spot?.Images[0]?.url4;
                    let url5 = spot?.Images[0]?.url5;
                    return (
                        <div>
                            <div className="main">
                                <div className="display-container">
                                    <div className="grid1">
                                        <button value={spotId} className="delete-button" onClick={deleteOneSpot}>delete</button>
                                        <Link to={`/spots/${spot.id}/edit`}> Edit </Link>
                                        <h2>{spot.name}</h2>
                                        <div className="review"><span className="spot-detail-address">{spot.city}{`, ${spot.state}, United State`}</span></div>
                                    </div>
                                    <div className="grid2">
                                        <img className="spot-detail-image2" src={url2} alt={spot.name} />
                                        <img className="spot-detail-image3" src={url3} alt={spot.name} />
                                        <img className="spot-detail-image4" src={url4} alt={spot.name} />
                                        <img className="spot-detail-image5" src={url5} alt={spot.name} />
                                    </div>
                                    <div className="grid3">
                                        <div className="room-description">
                                            <div className="room-description1">
                                                <div className="divider-1">
                                                    <div className="text-wrapper">
                                                        <h5>Entire home</h5>
                                                        <p className="diver-1-text">You'll have the guesthouse to yourself</p>
                                                    </div>
                                                    <div className="text-wrapper">
                                                        <h5>Enhanced Clean</h5>
                                                        <p className="diver-1-text">This host committed to Airbnb's 5-step enhanced cleaning process.</p>
                                                    </div>
                                                    <div className="text-wrapper">
                                                        <h5>Self check-in</h5>
                                                        <p className="diver-1-text">Free cancellation 7 days prior to the check-in date</p>
                                                    </div>
                                                </div>
                                                <div className="divider-2">
                                                    <h2 className="offer-list-title">What this place offers</h2>
                                                    <div className="offer-list">
                                                            <p className="text1-wrapper">Kitchen</p>
                                                            <p className="text1-wrapper">Wifi</p>
                                                            <p className="text1-wrapper">Free parking on premises</p>
                                                            <p className="text1-wrapper">Hair Dryer</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="booking-form-container">
                                            <form
                                                className="booking-form"
                                                onSubmit={bookingFormSubmit}
                                            >
                                                <div className="price">{`${spot.price} / night`}</div>
                                                <div>
                                                    <label>
                                                        CHECK-IN
                                                    <input
                                                        type="date"
                                                        placeholder="CHECK-IN"
                                                        value={startDate}
                                                        onChange={(e) => setStartDate(e.target.value)}
                                                        required
                                                    />
                                                    </label>
                                                </div>
                                                <div>
                                                    <label>
                                                        CHECKOUT
                                                        <input
                                                            type="date"
                                                            placeholder="CHECKOUT"
                                                            value={endDate}
                                                            onChange={e => setEndDate(e.target.value)}
                                                            required
                                                        />
                                                    </label>
                                                </div>
                                                <label>
                                                    GUESTS
                                                    <select
                                                        value={guestNumber}
                                                        onChange={e => setGuestNumber(e.target.value)}
                                                    >
                                                        <option selected value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                </label>
                                                <p>Price detail</p>
                                                <div>
                                                    <p>{`$${spot.price} x  ${dayDiff} nights`}</p>
                                                    <p>Cleaning fee<span>{`$${roomCharge*0.1}`}</span></p>
                                                    <p>Service fee<span>{`$${roomCharge*0.15}`}</span></p>
                                                    <p>Total(USD)<span>{`$${(roomCharge*0.25)+(spot.price*dayDiff)}`}</span></p>
                                                </div>
                                                <button type="submit" className="reserveButton">Comfirm Booking</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
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
