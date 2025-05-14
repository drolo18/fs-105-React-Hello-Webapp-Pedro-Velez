import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export const CreateContact = () => {
    const navigate = useNavigate()

    const { store, dispatch } = useGlobalReducer()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const addContacts = async () => {
        try {
            const response = await fetch('https://playground.4geeks.com/contact/agendas/Pedro/contacts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "name": name,
                    "phone": phone,
                    "email": email,
                    "address": address,

                })
            }
            )

            if (response.ok) {
                setTimeout(() => {  
                    <div class="alert alert-success" role="alert">
                        Usuario Creado Con Éxito
                    </div>
                }, 500)
            }

        } catch (error) {
            console.log(error);

        }


    }
    const addContatsNavigate = async () => {
        await addContacts()
        navigate("/")


    }


    return (
        <form className="container-fluid">
            <h1 className="text-center m-5">Add New Contact</h1>
            <div className="d-flex justify-content-center row">
                <div className="d-flex justify-content-center">
                    <input className="col-5 rounded m-3 text-center" type="text" placeholder="Nombre" onChange={e => setName(e.target.value)} value={name} />
                </div>
                <div className="d-flex justify-content-center">
                    <input className="col-5 rounded m-3 text-center" type="text" placeholder="Teléfono" onChange={e => setPhone(e.target.value)} value={phone} />
                </div>
                <div className="d-flex justify-content-center">
                    <input className="col-5 rounded m-3 text-center" type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} />
                </div>
                <div className="d-flex justify-content-center">
                    <input className="col-5 rounded m-3 text-center" type="text" placeholder="Dirección" onChange={e => setAddress(e.target.value)} value={address} />
                </div>
                <div className="d-flex justify-content-center">
                    <button onClick={addContatsNavigate}>Agregar contacto</button>
                </div>
            </div>
        </form>
    )
}