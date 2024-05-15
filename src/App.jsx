import { useState } from 'react'
import { StartPanel } from './components/StartPanel/StartPanel'
import { MainPanel } from './components/MainPanel/MainPanel'

function App() {
	const [isStartPanelShown, setIsStartPanelShown] = useState(true)

	return (
		<>
			<div className='background-container'>
				{isStartPanelShown ? <StartPanel setIsStartPanelShown={setIsStartPanelShown} /> : <MainPanel />}
			</div>
		</>
	)
}

export default App
