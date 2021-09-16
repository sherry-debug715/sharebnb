import { csrfFetch } from './csrf';

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
        console.log(newSpot);
        dispatch(addNewSpot(newSpot));
        return newSpot;
    }
}

const initialState = {
    list: []
}

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allSpots = action.list;
            return {
                list: allSpots

            };
        }
        // const addNewSpot = newSpot => {
        //     return {
        //         type:ADD_SPOT,
        //         newSpot
        //     }
        // }
        case ADD_SPOT: {
            if (!state[action.newSpot.id]) {
              let newState = {
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
        default:
            return state;
    }
}

export default spotsReducer;
