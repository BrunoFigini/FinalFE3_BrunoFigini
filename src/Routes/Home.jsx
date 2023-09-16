import React from "react";
import Card from "../Components/Card";
import { useCharStates } from "../Components/utils/global.context";
import Footer from "../Components/Footer";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
	const { state } = useCharStates();

	return (
		<div className={state.theme === "light" ? "light" : "dark"}>
			<main>
				<h1>Home</h1>
				<div>
					{state.chars.map((char) => (
						<Card char={char} key={char.id} />
					))}
				</div>
			</main>
			<Footer></Footer>
		</div>
	);
};

export default Home;
