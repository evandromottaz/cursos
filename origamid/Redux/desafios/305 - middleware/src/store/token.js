import { getLocalStorage } from "./middleware/localStorage";

const initialState = {
	fetching: false,
	error: null,
	token: null,
};

const FETCH_STARTED = "token/FETCH_STARTED";
const FETCH_SUCCESS = "token/FETCH_SUCCESS";
const FETCH_ERROR = "token/FETCH_ERROR";

export const fetchStarted = () => ({ type: FETCH_STARTED });
export const fetchSuccess = () => ({ type: FETCH_SUCCESS });
export const fetchError = () => ({ type: FETCH_ERROR });

export function setToken(state = initialState, action) {
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
				token: getLocalStorage("token", action.payload),
			};
		case FETCH_ERROR:
			return {
				fetching: false,
				error: action.payload,
				token: null,
			};
		default:
			return state;
	}
}
