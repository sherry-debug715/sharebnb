import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSpots } from '../../store/spotsDisplay';
import './SpotsDisplay.css';

const SpotsBrowser = () => {
    const dispatch = useDispatch();
    const spots = useSelector(state => {
        return state.spot.list;
    });
    console.log(spots);
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
               {spots.map(spot => {
                  let url1 = spot?.Images[0].url1;
                //   console.log("url1=>------------" + url1);
                    return(

                        <div className="spots-container" key={spot.id}>
                            <Link to={`/spots/${spot.id}`} >
                            <div className="spot-container">
                                <div className="imag-container">
                                    <img className="spot-image" src={url1} alt={spot.name} />
                                </div>
                                <div className="content">
                                    <div className="spot-city">{spot.city}{`, ${spot.state}`}</div>
                                    <div className="room-price">{`$${spot.price} / night`}</div>
                                </div>
                            </div>
                            </Link>
                       </div>
                    )
                })}
           </div>
        </main>
        </>
    )
}

export default SpotsBrowser;
