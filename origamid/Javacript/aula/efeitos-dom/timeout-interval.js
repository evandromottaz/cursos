//--------------------------------------------------------- setTimeout()
function espera(text) {
    console.log(text)
}

setTimeout(espera, 1000, 'Passou 1s')

setTimeout(() => {
    console.log('Passou 2s');
},2000)

//--------------------------------------------------------- Loop e setTimeout()

// for(let i = 0; i < 20; i++) {
//     setTimeout(() => {
//         console.log('Passou ' + i + 's');
//     },1000 * i);
// }

//--------------------------------------------------------- This e Window

// const btn = document.querySelector('button');
// btn.addEventListener('click',handleClick);

// function handleClick() {
//     setTimeout(() => {
//         console.log(this);
//         this.classList.add('active');
//     },1000)
// }

//--------------------------------------------------------- setInterval()
function loop(text) {
    console.log(text)
}

let i = 0;
// setInterval(() => {
//     console.log(i++)
// }, 300);

//--------------------------------------------------------- clearInterval()
const contarAte10 = setInterval(() => {
        console.log(i++)
}, 300);

