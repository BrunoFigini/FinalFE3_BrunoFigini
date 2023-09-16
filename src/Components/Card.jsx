import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "./utils/global.context";


const Card = ({ char }) => {

	const { dispatch } = useCharStates();
	const toggleFav = () => {
		dispatch({ type: "TOGGLE_FAV", payload: char });
	};

	return (
		<div className="card">
			{/* En cada card deberan mostrar en name - username y el id */}

			{/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

			{/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

			<Link to={"/dentist/" + char.id}>
				<img
					alt="Silueta de una doctora"
					src="../../public/images/doctor.jpg"
				/>
				<h3>{char.name}</h3>
			</Link>
			<button onClick={toggleFav} className="favButton">
				⭐
			</button>
		</div>
	);
};

export default Card;
