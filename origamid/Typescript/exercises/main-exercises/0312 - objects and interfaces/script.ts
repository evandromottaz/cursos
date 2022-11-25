// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData

interface UserData {
  [key: string]: string | number;
}

interface Window {
  userData: UserData;
}

interface UserId {
  id: "cpf" | "email" | "nome";
}

window.userData = {};

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  const userData = localStorage.getItem("userData");
  if (userData) {
    const localData = getLocalStorage(userData);

    if (localData[input.id]) {
      input.value = localData[input.id];
      setUserData(input);
    }
  }

  input.addEventListener("keyup", handleKeyUp);
});

function isValidId(id: unknown): id is UserId {
  if (id === "cpf" || id === "email" || id === "nome") {
    return true;
  } else return false;
}

function setLocalStorage(userData: string, value: UserData) {
  localStorage.setItem(userData, JSON.stringify(value));
}

function handleKeyUp({ target }: { target: EventTarget | null }) {
  if (target instanceof HTMLInputElement) {
    if (isValidId(target.id)) {
      setUserData(target);
      setLocalStorage("userData", window.userData);
    }
  }
}

console.log(window.userData);

function getLocalStorage(userData: string) {
  return JSON.parse(userData);
}

function setUserData(input: HTMLInputElement) {
  window.userData[input.id] = input.value;
}
