class Countdown {
  constructor(futureDay) {
    this.futureDay = futureDay
  }
  
  get today() {
    return new Date() // Pega a data atual
  }

  get futureDate() {
    return new Date(this.futureDay)
  }

  get timeDiference() {
    return this.futureDate - this.today
  }

  get days() {
    // 24 horas, 60 min/sec, 1000 milisec...
    return Math.floor(this.timeDiference / (24 * 60 * 60 * 1000)) 
  }

  get hours() {
    return Math.floor(this.timeDiference / (60 * 60 * 1000))
  }

  get minutes() {
    return Math.floor(this.timeDiference / (60 * 1000))
  }

  get seconds() {
    return Math.floor(this.timeDiference / 1000)
  }

  total() {
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;

    return {
      days,
      hours,
      minutes,
      seconds
    }
  }
}

const casamento = new Countdown('17 July 2022 18:00:00 GMT -0300')
const div = document.querySelector('div')

const cronometro = setInterval(() => {
  div.innerHTML = casamento.total().innerText
},1000)