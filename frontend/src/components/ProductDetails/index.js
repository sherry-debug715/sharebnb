import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { deleteSpot, getSpots } from '../../store/spotsDisplay';
import './spotDetail.css';

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
        history.push('./spots')
    }

    return (
        <>
        <h1>This is Product Detail Page</h1>
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
                            <div className="spot-description">
                                <p><strong>Entire home</strong></p>
                                <p>You'll have the treehouse to yourself</p>
                                <p><strong>Enhanced Clean</strong></p>
                                <p>This host committed to Airbnb's 5-step enhanced cleaning process.</p>
                                <p><strong>Self check-in</strong></p>
                                <p>You can check in with the doorman.</p>
                                <p><strong>Free cancellation 7 days prior to the check-in date</strong></p>
                            </div>
                            <div>
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

                        </div>
                    )
                }
            })}
        </div>
        </>
    )
}

export default ProductDetail;
