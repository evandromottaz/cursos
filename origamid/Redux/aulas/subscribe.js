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

function render() {
  const state = store.getState(); // 10
  const total = document.getElementById('total');
  total.innerText = state;
}
render();

// aula 3

store.subscribe(render); // subscribe renderiza TODA a aplicação novamente
const unsubscribe = store.subscribe(render); // o retorno para o subscribe
unsubscribe();

const button = document.getElementById('button');
button.addEventListener('click', () => store.dispatch(incrementar()));
