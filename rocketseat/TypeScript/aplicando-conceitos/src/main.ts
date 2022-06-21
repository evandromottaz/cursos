import { Git } from './components/useFetch'
import { Card } from './components/card'
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

const git = await Git('https://api.github.com/users/evandromottaz')

app.innerHTML = `
	<h1>Hello ${Card({name:'Evandro'})}</h1>
	Your ID is: <strong>${git.id}</strong>
`

