import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import { getSpots } from '../../store/spotsDisplay';
import './SpotsDisplay.css';
import Fab from './Fab';
import CreateSpotForm from './CreateSpotForm';
import ProductDetail from '../ProductDetails';
import ProfileButton from '../Navigation/ProfileButton';

const SpotsBrowser = () => {

    const dispatch = useDispatch();
    const { spotId } = useParams();
    const spots = useSelector(state => {
        return state.spot.list;
    });
    const [showForm, setShowForm] = useState(false);


    useEffect(() => {
        dispatch(getSpots());
    }, [dispatch]);

    if (!spots) {
        return null;
    }

    return (
        <>
        <main>
           <div className="spots-page">
               <Fab hidden={showForm} onClick={() => setShowForm(true)} />
               <div className="spots-buttons-container">
                   <div className="spots-buttons-container2">
                        <div className="individual-button-container1">
                            <div className="individual-button-container2">
                                <div className="individual-button-container3">
                                    <button className="spots-buttons">
                                        <span className="spots-buttons-span1">
                                            <div className="individual-button-container4">
                                                <span className="spots-buttons-span2">Free cancellation</span>
                                            </div>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div className="spots-buttons-container2">
                        <div className="individual-button-container1">
                            <div className="individual-button-container2">
                                <div className="individual-button-container3">
                                    <button className="spots-buttons">
                                        <span className="spots-buttons-span1">
                                            <div className="individual-button-container4">
                                                <span className="spots-buttons-span2">Entire place</span>
                                            </div>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div className="spots-buttons-container2">
                        <div className="individual-button-container1">
                            <div className="individual-button-container2">
                                <div className="individual-button-container3">
                                    <button className="spots-buttons">
                                        <span className="spots-buttons-span1">
                                            <div className="individual-button-container4">
                                                <span className="spots-buttons-span2">Price</span>
                                            </div>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div className="spots-buttons-container2">
                        <div className="individual-button-container1">
                            <div className="individual-button-container2">
                                <div className="individual-button-container3">
                                    <button className="spots-buttons">
                                        <span className="spots-buttons-span1">
                                            <div className="individual-button-container4">
                                                <span className="spots-buttons-span2">Rooms and beds</span>
                                            </div>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div className="spots-buttons-container2">
                        <div className="individual-button-container1">
                            <div className="individual-button-container2">
                                <div className="individual-button-container3">
                                    <button className="spots-buttons">
                                        <span className="spots-buttons-span1">
                                            <div className="individual-button-container4">
                                                <span className="spots-buttons-span2">More filters</span>
                                            </div>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
               {spots.map(spot => {
                  let url1 = spot?.Images[0]?.url1;
                    return(
                        <div className="spots-container" key={spot.id}>
                            <Link to={`/spots/${spot.id}`} >
                            <div className="spot-container">
                                <div className="imag-container">
                                    <img className="spot-image" src={url1} alt={spot.name} />
                                </div>
                                <div className="content">
                                    <h3 className="spot-city">{spot.city}{`, ${spot.state}`}</h3>
                                    <div className="room-price">{`$${spot.price} / night`}</div>
                                </div>
                            </div>
                            </Link>
                       </div>
                    )
                })}
           </div>
           {showForm ? (
                <CreateSpotForm hideForm={() => setShowForm(false)} />
            ) : (
                <Route path="/spots/:spotId">
                <ProductDetail/>
                </Route>
            )}
        </main>
        </>
    )
}

export default SpotsBrowser;
