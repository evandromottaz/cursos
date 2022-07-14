const INCREMENTAR = 'INCREMENTAR';
const SOMAR = 'SOMAR';
const initialState = 10;

function incrementar() {
  return { type: INCREMENTAR };
}

function somar(payload) {
  return { type: SOMAR, payload };
}

function reducer(state = initialState, action) {
  if (action.type === INCREMENTAR) return state + 1;
  if (action.type === SOMAR) return state + action.payload;
  return state;
}

const store = Redux.createStore(reducer);
const state = store.getState(); // 10

store.dispatch(somar(25));
state = store.getState(); // 35

store.dispatch(incrementar());

const button = document.querySelector('#button');
button.addEventListener('click', () => store.dispatch(incrementar()));
state = store.getState();
