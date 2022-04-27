import { useState } from 'react';
import AddField from './components/addField/addField';
import Form from './components/Form/form';
import useGetData from './hooks/useGetData';

function App() {
	const [ visible, setVisible ] = useState(false);
	const { state, handdleAdd } = useGetData();
	return (
		<div className="App">
			{visible && (
				<div className='json'>
					<pre>{JSON.stringify(state, null, 2)}</pre>
				</div>
			)}
      <button id={visible ? 'visibleButton' : null} onClick={()=> setVisible(!visible)} className='viewJson'>View JSON</button>
			<main className="main">
				<Form data={state} />
				<AddField handdleAdd={handdleAdd} />
			</main>
		</div>
	);
}

export default App;
