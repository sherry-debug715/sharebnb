import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { editSpotDetails, getSpots } from '../../store/spotsDisplay';

const EditSpotForm = () => {
    const dispatch = useDispatch();
    const spotArray = useSelector(state => {
        return state.spot.list;
    })
    // console.log("=================>" + spot);

    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch]);

    const {spotId} = useParams();
    const spot = spotArray.find(spot => spot.id === +spotId)
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [url1, setUrl1] = useState('');
    const [url2, setUrl2] = useState('');
    const [url3, setUrl3] = useState('');
    const [url4, setUrl4] = useState('');
    const [url5, setUrl5] = useState('');
    const history = useHistory();
    const userId = useSelector((state) => state.session.user.id);
    // console.log(spotId);

    useEffect(() => {
      if(spot) {
        setCity(spot.city);
        setState(spot.state);
        setName(spot.name);
        setPrice(spot.price);
        setUrl1(spot.Images[0]?.url1)
        setUrl2(spot.Images[0]?.url2)
        setUrl3(spot.Images[0]?.url3)
        setUrl4(spot.Images[0]?.url4)
        setUrl5(spot.Images[0]?.url5)
      }
    }, [spot])
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId,
            id:spotId,
            city,
            state,
            name,
            price,
            url1,
            url2,
            url3,
            url4,
            url5
        };

        let editedSpot = dispatch(editSpotDetails(payload))
        // console.log(editedSpot);

        return history.push(`/spots/${spotId}`);

    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push(`/spots/${spotId}`);
    };

    return (
        <section className="edit-form-holder">
          <form onSubmit={handleSubmit}>
          <input
              type="text"
              placeholder="City"
              required
              value={city}
              onChange={e => setCity(e.target.value)} />
            <input
              type="text"
              placeholder="State"
              required
              value={state}
              onChange={e => setState(e.target.value)} />
            <input
              type="text"
              placeholder="Description"
              required
              value={name}
              onChange={e => setName(e.target.value)} />
            <input
              type="number"
              placeholder="Price"
              value={price}
              required
              onChange={e => setPrice(e.target.value)} />
             <input
              type="text"
              placeholder="Please enter Image1 URL"
              value={url1}
              required
              onChange={e => setUrl1(e.target.value)} />
             <input
              type="text"
              placeholder="Please enter Image2 URL"
              value={url2}
              required
              onChange={e => setUrl2(e.target.value)} />
             <input
              type="text"
              placeholder="Please enter Image3 URL"
              value={url3}
              required
              onChange={e => setUrl3(e.target.value)} />
             <input
              type="text"
              placeholder="Please enter Image4 URL"
              value={url4}
              onChange={e => setUrl4(e.target.value)} />
             <input
              type="text"
              placeholder="Please enter Image5 URL"
              value={url5}
              onChange={e => setUrl5(e.target.value)} />
            <button type="submit">Update Room Information</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
          </form>
        </section>
      );
};

export default EditSpotForm;
