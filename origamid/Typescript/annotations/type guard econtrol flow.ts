// Guard, Safety e Narrowing
// O Type Guard (defesa) garante a Type Safety (segurança) do dado dentro do bloco condicional. Esse processo é chamado de Type Narrowing (estreitamento).

// O TypeScript faz Control Flow (controle de fluxo) para entender qual o dado dentro da condicional.

function typeGuard(value: any) {
  if (typeof value === "string") {
    return value.toLowerCase();
  }
  if (typeof value === "number") {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}

typeGuard("Origamid");
typeGuard(200);
typeGuard(document.body);
