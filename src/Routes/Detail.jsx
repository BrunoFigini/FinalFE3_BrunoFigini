import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCharStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
	// Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
	const { state, dispatch } = useCharStates();
	const { id } = useParams();
	const { name, phone, website, email } = state.char;
	const url = "https://jsonplaceholder.typicode.com/users/" + id;

	useEffect(() => {
		axios(url)
			.then((res) => {
				console.log(res.data);
				dispatch({ type: "GET_CHAR", payload: res.data });
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className={state.theme === "light" ? "light" : "dark"}>
			<h1>Detail dentist id {id}</h1>
			{/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
			{/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
			<img src="/bruno_figini_final/public/images/doctor.jpg" />
			<h2>{name}</h2>
			<h3>{email}</h3>
			<h4>{website}</h4>
			<h4>{phone}</h4>
		</div>
	);
};

export default Detail;
