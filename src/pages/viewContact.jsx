import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams, Link } from "react-router-dom";

const ViewContact = () => {
    const { store } = useGlobalReducer();
    const { id } = useParams();

    const contact = store.contacts.find(c => String(c.id) === String(id));

    if (!contact) {
        return (
            <div className="container text-center mt-5">
                <h2>Contacto no encontrado</h2>
                <Link to="/" className="btn btn-primary mt-3">Volver a la lista</Link>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="card mx-auto" style={{ maxWidth: "500px" }}>
                <div className="card-body text-center">
                    <img
                        className="rounded-circle mb-3"
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="Avatar"
                        width={120}
                        height={120}
                    />
                    <h2 className="card-title">{contact.name}</h2>
                    <p className="card-text"><i className="fa-solid fa-phone-flip"></i> {contact.phone}</p>
                    <p className="card-text"><i className="fa-solid fa-envelope-open-text"></i> {contact.email}</p>
                    <p className="card-text"><i className="fa-solid fa-location-dot"></i> {contact.address}</p>
                    <Link to="/" className="btn btn-outline-primary mt-3">Volver</Link>
                </div>
            </div>
        </div>
    );
};

export default ViewContact;