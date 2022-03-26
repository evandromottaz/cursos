export default class Countdown {
    constructor(futureDate) {
        this.futureDate = futureDate

    }
    get _actualDate() {
        return new Date()
    }
    get _futureDate() {
        return new Date(this.futureDate)
    }
    get _diferencaTempo() {
        return this._futureDate.getTime() - this._actualDate.getTime()
    }
    get days() {
        return Math.floor(this._diferencaTempo / (24 * 60 * 60 * 1000))
    }
    get hours() {
        return Math.floor(this._diferencaTempo / (60 * 60 * 1000))
    }
    get minutes() {
        return Math.floor(this._diferencaTempo / (60 * 1000))
    }
    get seconds() {
        return Math.floor(this._diferencaTempo / 1000)
    }
    get total() {
        const days = this.days
        const hours = this.hours % 24
        const minutes = this.minutes % 60
        const seconds = this.seconds % 60
        return {
            days,
            hours,
            minutes,
            seconds
        }
    }
}

