const INCREMENTAR = 'INCREMENTAR';
const SOMAR = 'SOMAR';

function incrementar() {
  return { type: INCREMENTAR };
}

function somar(payload) {
  return { type: SOMAR, payload };
}

const initialState = 0;
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENTAR:
      return state + 1;
    case SOMAR:
      return state + action.payload;
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

function render() {
  const state = store.getState(); // 10
  const total = document.getElementById('total');
  total.innerText = state;
}
render();

// aula 3

store.subscribe(render); // subscribe renderiza TODA a aplicação novamente

const button = document.getElementById('button');
button.addEventListener('click', () => store.dispatch(incrementar()));
