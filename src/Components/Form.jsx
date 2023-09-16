import React, { useState } from "react";

const Form = () => {
	//Aqui deberan implementar el form completo con sus validaciones

	const [user, setUser] = useState({
		name: "",
		email: "",
	});

	const [show, setShow] = useState(false);
	const [error, setError] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		const emailRegex =
			/^[a-zA-Z0-9._%+-]{4,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/;

		console.log(user.email.match(emailRegex));
		if (user.name.length > 5 && user.email.match(emailRegex)) {
			setShow(true);
			setError(false);
		} else {
			setShow(false);
			setError(true);
		}
	};

	const handleChange = (event) =>
		setUser({ ...user, name: event.target.value });
	console.log(user);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Full Name
					<input type="name" onChange={handleChange} required></input>
				</label>
				<label>
					Email
					<input
						type="email"
						onChange={(event) =>
							setUser({ ...user, email: event.target.value })
						}
						required
					></input>
				</label>
				<label>
					Message
					<input type="textarea" required></input>
				</label>

				{error && (
					<h4>Please make sure you enter the information correctly.</h4>
				)}

				{show ? (
					<>
						<h4>
							Thank you {user.name}, we will contact you as soon as
							possible via email
						</h4>
					</>
				) : null}

				<button>Send</button>
			</form>
		</div>
	);
};

export default Form;
