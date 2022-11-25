// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button

const btn = document.querySelector("#btn-mobile");

function setAria(el: HTMLElement, state: boolean = false) {
  el.ariaExpanded = "false";
  el.ariaLabel = "Abrir Menu";

  if (state) {
    el.ariaExpanded = "true";
    el.ariaLabel = "Fechar Menu";
  }
}

function handleClick(e: PointerEvent) {
  e.preventDefault();

  const nav = document.querySelector("#nav");

  if (btn instanceof HTMLButtonElement && nav) {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
      setAria(btn, true);
    } else {
      setAria(btn);
    }
  }
}

if (btn instanceof HTMLButtonElement) {
  btn?.addEventListener("pointerdown", handleClick);
}
