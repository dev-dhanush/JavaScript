import "./App.css"
import ClickCounts from "./Components/ClickCounts"
import HoverCounts from "./Components/HoverCounts"
import Counter from "./Components/Counter"

function App() {
	return (
		<div className="App">
			<Counter render={(count, incrementCount) => <ClickCounts count={count} incrementCount={incrementCount} />} />
			<Counter render={(count, incrementCount) => <HoverCounts count={count} incrementCount={incrementCount} />} />
		</div>
	)
}

export default App
