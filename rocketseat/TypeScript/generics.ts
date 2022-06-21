// Generics deixa a typagem na hora de inferir valores na função.

// Também é possível usar 'extends' para dizer que a typagem vai ser de um <number> ou <string> E se caso não for inserida na função, será por padrão <string>.

function useState<T extends number | string = string>() {
let state: T;

    function get() {
    	return state;
    }

    function set<T>(newValue) {
    	state = newValue;
    }

    return { get, set };

}

const newState = useState<number>()

// newState typa os valores do tipo <number>

newState.set('name') // error
newState.set(123) // ok
