import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createSpot } from '../../store/spotsDisplay';

const CreateSpotForm = ({hideForm}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector((state) => state.session.user);
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [imageUrl1, setImageUrl1] = useState('');
    const [imageUrl2, setImageUrl2] = useState('');
    const [imageUrl3, setImageUrl3] = useState('');
    const [imageUrl4, setImageUrl4] = useState('');
    const [imageUrl5, setImageUrl5] = useState('');

    const updateCity = (e) => setCity(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateName = (e) => setName(e.target.value);
    const updatePrice = (e) => setPrice(e.target.value);
    const updateImageUrl1 = (e) => setImageUrl1(e.target.value);
    const updateImageUrl2 = (e) => setImageUrl2(e.target.value);
    const updateImageUrl3 = (e) => setImageUrl3(e.target.value);
    const updateImageUrl4 = (e) => setImageUrl4(e.target.value);
    const updateImageUrl5 = (e) => setImageUrl5(e.target.value);

    const reset = () => {
        setCity("");
        setState("");
        setName("");
        setPrice(0);
        setImageUrl1("");
        setImageUrl2("");
        setImageUrl3("");
        setImageUrl4("");
        setImageUrl5("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let createdSpot = {
          userId: currentUser?.id,
          city,
          state,
          name,
          price,
          url1: imageUrl1,
          url2: imageUrl2,
          url3: imageUrl3,
          url4: imageUrl4,
          url5: imageUrl5
        };

        const newSpot = await dispatch(createSpot(createdSpot));
        // console.log("===================>"+response);
        if (newSpot) {
          return history.push(`/spots/${newSpot.id}`);
        }
        reset();
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        hideForm();
    };

    return (
        <section className="new-form-holder centered middled">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="City"
              required
              value={city}
              onChange={updateCity} />
            <input
              type="text"
              placeholder="State"
              required
              value={state}
              onChange={updateState} />
            <input
              type="text"
              placeholder="Description"
              required
              value={name}
              onChange={updateName} />
            <input
              type="number"
              placeholder="Price"
              value={price}
              required
              onChange={updatePrice} />
             <input
              type="text"
              placeholder="Image1 URL"
              value={imageUrl1}
              required
              onChange={updateImageUrl1} />
             <input
              type="text"
              placeholder="Image2 URL"
              value={imageUrl2}
              required
              onChange={updateImageUrl2} />
             <input
              type="text"
              placeholder="Image3 URL"
              value={imageUrl3}
              required
              onChange={updateImageUrl3} />
             <input
              type="text"
              placeholder="image4 URL"
              value={imageUrl4}
              onChange={updateImageUrl4} />
             <input
              type="text"
              placeholder="Image5 URL"
              value={imageUrl5}
              onChange={updateImageUrl5} />
            <button type="submit">Create new Room</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
          </form>
        </section>
    );
};

export default CreateSpotForm;
