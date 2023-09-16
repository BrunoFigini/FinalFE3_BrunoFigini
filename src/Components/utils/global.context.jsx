import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";

export const CharStates = createContext();

export const reducer = (state, action) => {
	switch (action.type) {
		case "GET_CHARS":
			return { ...state, chars: action.payload };

		case "GET_CHAR":
			return { ...state, char: action.payload };

		case "TOGGLE_FAV":
			const updatedFavs = state.favs.includes(action.payload)
				? state.favs.filter((item) => item !== action.payload)
				: [...state.favs, action.payload];
			return { ...state, favs: updatedFavs };

		case "TOGGLE_THEME":
			return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
		default:
			throw new Error();
	}
};

const localFavs = JSON.parse(localStorage.getItem("favs"));
const initialFavState = localFavs ? localFavs : [];


const initialState = {
	chars: [],
	char: {},
	favs: initialFavState,
	theme: "dark",
};

export const Context = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const url = "https://jsonplaceholder.typicode.com/users";

	useEffect(() => {
		axios(url)
			.then((res) => {
				console.log(res.data);
				dispatch({ type: "GET_CHARS", payload: res.data });
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		localStorage.setItem("favs", JSON.stringify(state.favs));
	}, [state.favs]);

	return (
		<CharStates.Provider value={{ dispatch, state }}>
			{children}
		</CharStates.Provider>
	);
};

export const useCharStates = () => useContext(CharStates);
