// middleware, recebe store, next e action.
const logger = (store) => (next) => (action) => {
	console.log(action);
	// temos sempre que chamar o next(action), para enviarmos
	// a ação para o próximo middleware (ou reduce se esse for o último)
	return next(action);
};
// Configura o middleware, podemos passar quantos quisermos.
const middleware = Redux.applyMiddleware(logger);

// Passar o middleware como segundo ou terceiro argumento do createStore
// Se o segundo argumento não for uma função, este será considerado
// o estado inicial da aplicação.
const store = Redux.createStore(reducer, middleware);

store.dispatch({ type: "INCREMENTAR" });
store.dispatch({ type: "REDUZIR" });

/* ------------ EXEMPLO 2 ------------- */

// Desestruturação das funções do Redux (não é necessário, podemos usar Redux.compose)
const { compose, applyMiddleware } = Redux;
// Verifica se __REDUX_DEVTOOLS_EXTENSION__COMPOSE__ existe, se nõa usa o compose puro.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Aplica o Middleware com o compose
const enhancer = composeEnhancers(applyMiddleware(logger));
// Utiliza a devTools + middleware como enhancer da store
const storeEnhancer = Redux.createStore(reducer, enhancer);

const logger2 = (store) => (next) => (action) => {
	console.group(action.type);
	console.log("ACTION", action);
	// store.getState antes de next(action), retorna o estado atual
	console.log("PREV_STATE", store.getState());
	const result = next(action);
	// store.getState após next(action), retorna o estado posterior
	console.log("NEW_STATE", store.getState());
	console.groupEnd();
	// temos sempre que retornar o resultado de next(action)
	return result;
};

const action = store.dispatch({ type: "INCREMENTAR" });
console.log(action);
// {type: 'INCREMENTAR'}, se não retornarmos nada no Middleware, aqui será undefined
