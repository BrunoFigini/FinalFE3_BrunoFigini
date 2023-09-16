
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="favs" element={<Favs />} />
				<Route path="contact" element={<Contact />} />
				<Route path="/dentist/:id" element={<Detail />} />
			</Routes>
		</>
	);
}

export default App;
