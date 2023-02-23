const localStorage = (store) => (next) => (action) => {
	const result = next(action);
	if (action.localStorage) {
		localStorage.setItem(action.localStorage, JSON.stringify(action.payload));
	}

	return result;
};

export default localStorage;
