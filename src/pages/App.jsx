import logo from '../assets/github-circle-1.svg';
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';
import { useState } from 'react';
import { api } from '../services/api';

function App() {
	const [currentRepo, setCurrentRepo] = useState('');
	const [repos, setRepos] = useState([]);

	async function handleSearchRepo() {
		try {
			const { data } = await api.get(`repos/${currentRepo}`);

			if (data.id) {
				setRepos((prev) => [...prev, data]);
				setCurrentRepo('');
				return;
			}
		} catch (error) {

			alert('Repositório não encontrado! ' + error);
		}
	}

	const handleRemove = (id) => {
		const removeRepo = repos.filter(repo => repo.id !== id);
		setRepos(removeRepo)
	}

	return (
		<Container>
			<img src={logo} width={72} height={72} alt="git hub logo" />
			<Input
				value={currentRepo}
				onChange={(e) => setCurrentRepo(e.target.value)}
			/>
			<Button onClick={handleSearchRepo} />
			{repos.map((repo) => (
				<ItemRepo key={repo.id} repo={repo} handleRemove={handleRemove} />
			))}
		</Container>
	);
}

export default App;
