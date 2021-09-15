import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getSpots } from '../../store/spotsDisplay';

const SpotsBrowser = () => {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const spots = useSelector(state => {
        return state.spot;
    });

    useEffect(() => {
        dispatch(getSpots());
    }, [dispatch]);

    if (!spots) {
        return null;
    }
    const allSpots = [];
    for(let key in spots) {
        allSpots.push(spots[key]);
    }
    // console.log("this is allSpot-------------" + allSpots)
    return (
        <>
        <main>
           <div>
               {allSpots.map(spot => {
                  let url1 = spot?.Images[0].url1;
                //   console.log("url1=>------------" + url1);
                    return(
                        <div>
                            <NavLink to={`/spots/${spotId}`} key={spot.id}>
                                {/* <img src={url1} alt="spot" /> */}
                                <span className="spot-description">{spot.name}</span> {`$${spot.price} / night`}
                            </NavLink>
                       </div>
                    )
                })}
           </div>
        </main>
        </>
    )
}

export default SpotsBrowser;
