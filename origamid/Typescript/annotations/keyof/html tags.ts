interface Elementos {
  a: HTMLAnchorElement;
  video: HTMLVideoElement;
  div: HTMLElement;
  body: HTMLBodyElement;
  audio: HTMLAudioElement;
}

function selecionar<Chave extends keyof Elementos>(
  seletor: Chave
): null | Elementos[Chave] {
  return document.querySelector(seletor);
}

selecionar("body");
