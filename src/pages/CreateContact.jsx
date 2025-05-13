import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const CreateContact = () => {

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

            if(response.ok){
                const data = await response.json()
                dispatch ({
                    type: 'addContacts',
                    payload: data
                })
            }

        } catch (error) {
            console.log(error);

        }


    }


    return (
        <div>
            <input type="text" placeholder="Nombre" onChange={e => setName(e.target.value)} value={name} />
            <input type="text" placeholder="Teléfono" onChange={e => setPhone(e.target.value)} value={phone}/>
            <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email}/>
            <input type="text" placeholder="Dirección" onChange={e => setAddress(e.target.value)} value={address}/>
            <button onClick={addContacts}>Agregar contacto</button>
        </div>
    )
}