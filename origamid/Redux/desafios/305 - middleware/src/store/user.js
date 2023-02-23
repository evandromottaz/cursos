import { getLocalStorage } from "./middleware/localStorage";

const initialState = {
	fetching: false,
	data: null,
	error: false,
	user: null,
};

const FETCH_STARTED = "user/FETCH_STARTED";
const FETCH_SUCCESS = "user/FETCH_SUCCESS";
const FETCH_ERROR = "user/FETCH_ERROR";

const fetchStarted = () => ({ type: FETCH_STARTED });
const fetchSuccess = () => ({ type: FETCH_SUCCESS });
const fetchError = () => ({ type: FETCH_ERROR });

export function setUser(state = initialState, action) {
	switch (action.type) {
		case FETCH_STARTED:
			return {
				...state,
				fetching: true,
			};
		case FETCH_SUCCESS:
			return {
				...state,
				fetching: false,
				user: getLocalStorage("user", action.localStorage),
			};
		case FETCH_ERROR:
			return {
				fetching: false,
				error: action.payload,
				user: null,
			};
		default:
			return state;
	}
}

export default {
	fetchStarted,
	fetchSuccess,
	fetchError,
};
