const initialState = {
  name: 'Evandro',
  idade: 31,
};

function reducer(state = initialState, action) {
  return state;
}

const store = Redux.createStore(reducer);
const state = store.getState(); // {name:Evandro, idade:31}
