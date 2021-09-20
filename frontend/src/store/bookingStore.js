import { csrfFetch } from './csrf';

const NEW_BOOKING = 'booking/NEW_BOOKING';
const BOOKING_DETAIL = 'booking/BOOKING_DETAIL';
const DELETE_BOOKING = 'booking/DELETE_BOOKING';
const EDIT_BOOKING = 'booking/EDIT_BOOKING';

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

const deleteABooking = deleteBooking => {
    return {
        type: DELETE_BOOKING,
        deleteBooking
    }
}

const editABooking = editBooking => {
    return {
        type: EDIT_BOOKING,
        editBooking
    }
}

export const editBookings = (bookingObj) => async dispatch => {

    const response = await csrfFetch(`/api/booking/${bookingObj.id}/edit`, {
        method: 'PUT',
        body: JSON.stringify(bookingObj)
    })

    if(response.ok) {
        const {bookingForEdit} = await response.json()
        // console.log(bookingForEdit);
        dispatch(editABooking(bookingForEdit));
        // return {bookingForEdit}
    }
    console.log("editing route======================")
};

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

export const removeBooking = bookingId => async dispatch => {
    const response = await csrfFetch(`/api/booking/${bookingId}`, {
        method: 'DELETE',
        body: JSON.stringify({bookingId})
    })
    if(response.ok) {
        const {refreshedProfile} = await response.json();
        dispatch(bookingDisplay(refreshedProfile));
        return 'deleted';
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

        case EDIT_BOOKING: {
            newState = {...state};
            const bookingToUpdate = newState.newBooking.find((booking) => booking.id === action.editBooking.id)

            let returnedState = newState.newBooking.map(booking => {
                    if (booking.id === bookingToUpdate.id) {
                        return action.editBooking
                    } else {
                        return booking
                    }
            })
            newState.newBooking = returnedState;
            return newState;
        }

        default:
            return state;
    }

}

export default bookingReducer;
