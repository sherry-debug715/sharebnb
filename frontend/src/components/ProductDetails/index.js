import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { deleteSpot, getSpots } from '../../store/spotsDisplay';
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import './spotDetail.css';
// import StarIcon from "@material-ui/icons/Star";

function ProductDetail() {

    const dispatch = useDispatch();
    const { spotId } = useParams();
    const spots = useSelector(state => {
        return state.spot.list;
    });

    const history = useHistory();

    useEffect(() => {
        dispatch(getSpots());
    }, [dispatch]);

    if (!spots) {
        return null;
    }

    const deleteOneSpot = e => {
        e.preventDefault();
        dispatch(deleteSpot(e.target.value));
        history.push('/spots')
    }

    return (
        <>
        <div className="spot-detail-wrapper">
            <button value={spotId} className="delete-button" onClick={deleteOneSpot}>delete</button>
            {spots.map(spot => {
                // console.log("this is spot.id=========>"+ spot.id)
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
                                <form className="booking-form">
                                    <div className="price">{`${spot.price} / night`}</div>
                                    <input
                                        type="date"
                                        placeholder="CHECK-IN"
                                        required
                                    />
                                    <input
                                        type="date"
                                        placeholder="CHECKOUT"
                                        required
                                    />
                                    <select placeholder="GUESTS" value='guestNumber'>
                                        <option value='1 guest'>1</option>
                                        <option value='2 guest'>2</option>
                                        <option value='3 guest'>3</option>
                                        <option value='4 guest'>4</option>
                                    </select>
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

