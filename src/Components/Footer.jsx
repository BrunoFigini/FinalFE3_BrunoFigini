import React from "react";
import { useCharStates } from "./utils/global.context";

const Footer = () => {
	const { state } = useCharStates();
	return (
		<footer className={state.theme === "light" ? "light" : "dark"}>
			<p>Final realizado por Bruno Figini - CTD Digital House</p>
			<img src="" alt="DH-logo" />
		</footer>
	);
};

export default Footer;
