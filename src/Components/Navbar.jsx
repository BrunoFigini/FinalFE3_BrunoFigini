import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCharStates } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
	const navigate = useNavigate();
	const { dispatch, state } = useCharStates();

	const handleToggle = () => {
		dispatch({ type: "TOGGLE_THEME" });
	};
	return (
		<nav className={state.theme === "light" ? "light" : "dark"}>
			{/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
			{/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
			<div style={{ display: "flex", justifyContent: "center" }}>
				<button onClick={() => navigate(-1)}>⬅Back</button>
				<Link to="/">
					<h4 style={{ margin: 10 }}>Home </h4>
				</Link>
				<Link to="/favs">
					<h4 style={{ margin: 10 }}>Favs</h4>
				</Link>
				<Link to="/contact">
					<h4 style={{ margin: 10 }}>Contact</h4>
				</Link>
				<button onClick={handleToggle}>Change theme</button>
			</div>
		</nav>
	);
};

export default Navbar;
