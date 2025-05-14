import { Link } from "react-router-dom";


export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<nav className="navbar navbar-light bg-light text-center">
						<div className="d-grid gap-2 col-6 mx-auto">
							<Link to="/CreateContact">
								<button className="btn btn-outline-success">Create contact</button>
							</Link>
						</div>
				</nav>
	</footer>
);