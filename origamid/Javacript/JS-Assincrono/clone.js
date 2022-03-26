const imagem = fetch('./jw.jpeg');

imagem
  .then((r) => r.blob())
  .then((body) => {
    const blobUrl = URL.createObjectURL(body);
    const imagemDom = document.querySelector('img');
    imagemDom.src = blobUrl;
  });
