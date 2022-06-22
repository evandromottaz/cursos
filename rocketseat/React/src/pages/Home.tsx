import { useEffect, useState } from "react";
import { Card } from "../components/Card";

type StudantType = {
	name: string;
	time: string;
}

type GitUser = {
	name: string;
	avatar_url: string;
}

export function Home() {
	const [studants, setStudants] = useState<StudantType[]>([]);
	const [studantName, setStudantName] = useState('');
	const [user, setUser] = useState<GitUser>({} as GitUser)

	function addStudant() {
		const newStudant = {
			name: studantName,
			time: new Date().toLocaleTimeString('pt-br', {
				hour: '2-digit',
				minute: '2-digit'
			})
		}

		setStudants(prevState => [...prevState, newStudant])
	}

	useEffect(() => {
		async function fetchGitUser() {
			const response = await fetch('https://api.github.com/users/evandromottaz');
			const data = await response.json()
			setUser(data)
		}
		fetchGitUser()
	}, [])

	return (
		<div className="flex items-center flex-col">
			<header className="flex mt-20 mb-6 w-2/4 justify-between items-center">
				<h1 className="font-bold text-xl">
					Lista de Presença
				</h1>

				<div className="flex items-center">
					<strong>{user.name}</strong>
					<img className="w-[60px] h-[60px] rounded-full ml-2" src={user.avatar_url} alt="Foto de perfil" />
				</div>
			</header>


			<input
				className="w-2/4 p-3.5 bg-[#E6E6E6] border-none rounded text-base"
				type="text"
				placeholder="Digite o nome"
				onChange={e => setStudantName(e.target.value)}
			/>

			<button className="w-2/4 p-6 bg-[#EA4C89] text-white rounded mt-3 mb-20 border-none cursor-pointer transition-all duration-200 hover:brightness-90 text-base" onClick={addStudant}>Adicionar</button>

			{studants.map(({ name, time }) =>
				<Card key={time} name={name} time={time}
				/>)}
		</div>
	)
}
