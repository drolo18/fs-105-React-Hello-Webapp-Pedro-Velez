import { Link } from "react-router-dom";


export const Navbar = () => {


 

	return (
		 <nav className="navbar navbar-light bg-light">
            <div className="container">
                <div className="row w-100 d-flex justify-content-between">
                    <div className="col-12 col-md-4 mb-2 mb-md-0 text-center text-md-start">
                        <Link to="/">
                            <button className="btn btn-outline-primary w-100 w-md-auto">Lista de Contactos</button>
                        </Link>
                    </div>
                   
                    <div className="col-12 col-md-4 text-center text-md-end">
                        <Link to="/CreateContact">
                            <button className="btn btn-outline-success w-100 w-md-auto">Create contact</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
	);
};