import Home from "./components/layout/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stores from "./components/layout/Stores";
import Form from "./components/forms/Form";

function App() {
	const URL =
		"https://raw.githubusercontent.com/music-tko/vincii-server/main/stores.json";

	const getData = async () => {
		const response = await fetch(URL);
		const data = await response.json();
		return data;
	};

	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
				<Routes>
					<Route path='/stores' element={<Stores data={getData()} />} />
				</Routes>
				<Routes>
					<Route path='/contact-us' element={<Form />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
