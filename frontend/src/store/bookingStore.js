import { csrfFetch } from './csrf';

const NEW_BOOKING = 'booking/NEW_BOOKING';
const BOOKING_DETAIL = 'booking/BOOKING_DETAIL'

const addNewBooking = newBooking => {
    return {
        type:NEW_BOOKING,
        newBooking
    }
}

const bookingDisplay = bookingDetail => {
    return {
        type:BOOKING_DETAIL,
        bookingDetail
    }
}

export const getBookings = () => async dispatch => {
    const response = await csrfFetch(`/api/booking`);

    if (response.ok) {
      const bookings = await response.json();
      dispatch(bookingDisplay(bookings));
    }
};

export const createBooking = addBooking => async dispatch => {
    const response = await csrfFetch(`/api/booking`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(addBooking),
    });
    if (response.ok) {
        const newBooking = await response.json();
        dispatch(addNewBooking(newBooking));
        return newBooking;
    }
}

const initialState = {
    newBooking: [] // newBooking is all of the bookings
}

const bookingReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case NEW_BOOKING: {
            if (!state[action.newBooking.id]) {
                newState = {
                 ...state,
                 [action.newBooking.id]: action.newBooking
               };

               const bookingList = newState.newBooking.map(id => newState[id]);
               bookingList.push(action.newBooking);
               newState = bookingList;
               return newState;
            }
             return {
               ...state,
               [action.newBooking.id]: {
                 ...state[action.newBooking.id],
                 ...action.newBooking,
               }
            };
        }

        case BOOKING_DETAIL: {
            const allBookings = action.bookingDetail;
            return {
                newBooking: allBookings
            };
        }

        default:
            return state;
    }

}

export default bookingReducer;
