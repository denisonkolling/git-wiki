import logo from '../assets/github-circle-1.svg';
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';
import { useState } from 'react';

function App() {


	
	const [repos, setRepos] = useState([])

	return (
		<Container>
			<img src={logo} width={72} height={72} alt='git hub logo'/>
			<Input />
			<Button />
			<ItemRepo />
		</Container>
	);
}

export default App;
