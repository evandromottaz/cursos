// // function Button(text,background){
// //     this.text = text;
// //     this.background = background;
// // }

// // Button.prototype.element = function() {
// //     document.createElement('button')
// // }

// class Button {
//     constructor(text, background,color) {
//         this.text = text;
//         this.background = background;
//         this.color = color;
//     }
//     //elemento a ser criado
//     element() {
//         const buttonElement = document.createElement('button');
//         buttonElement.style.background = this.background
//         buttonElement.innerText = this.text
//         buttonElement.style.color = this.color
//         return buttonElement;
//     }
//     //onde o botão será jogado
//     appendTo(target) {
//         const targetElement = document.querySelector(target);
//         targetElement.appendChild(this.element());
//         return targetElement;
//     }
// }

// const blueButton = new Button('Comprar', 'blue','white');

// console.log(blueButton.appendTo('body'));

class Button {
    constructor(options) {
        this.options = options

        /*options{
            backgroundColor:'blue',
            text:'Comprar',
            color:'white'
        }*/
    }

    static createButton(text,background) {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        buttonElement.style.background = background;
        return buttonElement;
    }
}

const blueButton = new Button({
    backgroundColor:'blue',
    text:'Comprar',
    color:'white'
})

const blueButtonStatic = Button.createButton('Clique', 'blue')

console.log(blueButtonStatic)

// extends
class Veiculo {
    constructor(rodas) {
      this.rodas = rodas;
    }
    acelerar() {
      console.log('Acelerou');
    }
  }
  
  class Moto extends Veiculo {
    empinar() {
      console.log('Empinou com ' + this.rodas + ' rodas');
    }
  }
  
  const honda = new Moto(2);
  honda.empinar();
  