import "./App.css";
import Nav from "./Components/Nav";
import FirstComponent from "./Components/FirstComponent";
import SecondComponent from "./Components/SecondComponent";
import ThirdComponent from "./Components/ThirdComponent";
import FourthComponent from "./Components/FourthComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<FirstComponent />}></Route>
				<Route path="/SecondComponent" element={<SecondComponent />}></Route>
				<Route path="/ThirdComponent" element={<ThirdComponent />}></Route>
				<Route path="/FourthComponent" element={<FourthComponent />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
