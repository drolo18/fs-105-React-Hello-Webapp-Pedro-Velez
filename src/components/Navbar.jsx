import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light text-center">
			<div className="d-grid gap-2 col-6 mx-auto">

				<Link to="/">
					<button className="btn btn-outline-primary">Lista de Contactos</button>
				</Link>
			</div>
			<div className="d-grid gap-2 col-6 mx-auto">
				<Link to="/CreateContact">
					<button className="btn btn-outline-success">Create contact</button>
				</Link>
			</div>
		</nav>
	);
};