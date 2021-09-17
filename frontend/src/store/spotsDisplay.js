import { csrfFetch } from './csrf';

const LOAD =  'spots/LOAD';
const SPOT_DETAIL = 'spots/SPOT_DETAI'
const ADD_SPOT = 'spots/ADD_SPOT';
const REMOVE_SPOT = 'spots/REMOVE_SPOT';
const EDIT_SPOT = 'spots/EDIT_SPOT';

const load = list => {
    return{
        type: LOAD,
        list,
    };
};

const loadSpot = spotDetail => {
    return{
        type: SPOT_DETAIL,
        spotDetail,
    };
};

const addNewSpot = newSpot => {
    return {
        type:ADD_SPOT,
        newSpot
    }
}

const editOneSpot = (editSpot, imageForEidt) => {
    return {
        type: EDIT_SPOT,
        editSpot,
        imageForEidt
    }
}

export const editSpotDetails = (spotDetails) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotDetails.id}/edit`, {
      method: 'PUT',
      body: JSON.stringify(spotDetails)
    })
    if(response.ok){
      const {spotForEdit, imageForEdit} = await response.json()
      dispatch(editOneSpot(spotForEdit, imageForEdit));
    //   dispatch(editOneSpot(imageForEdit));
      return {spotForEdit, imageForEdit};
    }
};

export const deleteSpot = (spotId) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
      method: 'DELETE',
      body: JSON.stringify({spotId})
    })
    if(response.ok){
        const {refreshedSpots, refreshedImages} = await response.json();
        // getSpots();
        dispatch(getSpots(refreshedSpots));
        dispatch(getSpots(refreshedImages));
        return 'deleted';
    }
};

export const getSpots = () => async dispatch => {
    const response = await csrfFetch(`/api/spots`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
};

export const createSpot = addSpot => async dispatch => {
    const response = await csrfFetch(`/api/spots`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(addSpot),
    });
    if (response.ok) {
        const newSpot = await response.json();
        dispatch(addNewSpot(newSpot));
        return newSpot;
    }
}

const initialState = {
    list: []
}

const spotsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD: {
            const allSpots = action.list;
            return {
                list: allSpots

            };
        }

        case ADD_SPOT: {
            if (!state[action.newSpot.id]) {
               newState = {
                ...state,
                [action.newSpot.id]: action.newSpot
              };

              const spotList = newState.list.map(id => newState[id]);
              spotList.push(action.newSpot);
              newState = spotList;
              return newState;
            }
            return {
              ...state,
              [action.newSpot.id]: {
                ...state[action.newSpot.id],
                ...action.newSpot,
              }
            };
        }

        case EDIT_SPOT: {
            newState = {...state};
            const spotToUpdate = newState.list.find((spot) => spot.id === action.editSpot.id)

            let returnedState = newState.list.map(spot => {
                    if (spot.id === spotToUpdate.id) {
                        return action.editSpot
                    } else {
                        return spot
                    }
            })
            // returnedState.push(action.editSpot);
            newState.list = returnedState;
            return newState;
        }

        default:
            return state;
    }
}

export default spotsReducer;
