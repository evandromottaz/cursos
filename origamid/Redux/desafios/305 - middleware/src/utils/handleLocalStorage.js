const initialState = {
	token: getLocalStorage("token", null),
};

export function getLocalStorage(key, initialState) {
	try {
		return JSON.parse(localStorage.getItem(key));
	} catch (error) {
		return initialState;
	}
}
