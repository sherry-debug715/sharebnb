
const LOAD =  'spots/LOAD';
const SPOT_DETAIL = 'spots/SPOT_DETAI'
const ADD_SPOT = 'spots/ADD_SPOT';


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

export const getSpots = () => async dispatch => {
    const response = await fetch(`/api/spots`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
};

export const createSpot = addSpot => async dispatch => {
    const response = await fetch(`/api/spots`, {
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

const spotsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD: {
            const allSpots = {};
            action.list.forEach(spot => {
                allSpots[spot.id] = spot;
            });
            return {
                ...allSpots,
                ...state
            };
        }
        case ADD_SPOT: {
            if (!state[action.newSpot.id]) {
              const newState = {
                ...state,
                [action.newSpot.id]: action.newSpot
              };
              const spotList = newState.list.map(id => newState[id]); //problem
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
        default:
            return state;
    }
}

export default spotsReducer;
