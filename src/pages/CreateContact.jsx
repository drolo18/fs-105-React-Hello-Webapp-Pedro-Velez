import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CreateContact = () =>{

    const {store, dispatch} = useGlobalReducer()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const addContacts = async()=>{
        const response = await fetch ('https://playground.4geeks.com/contact/agendas/Pedro/contacts',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                        "name": name,
                        "phone": phone,
                        "email": email,
                        "address": address,
                        
                })

            }

        )

    }

    return (
        <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
        </div>
    )
}