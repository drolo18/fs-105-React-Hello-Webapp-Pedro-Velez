import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

import { Spinner } from "../components/spinner";

export const CreateContact = ({type}) => {
 
    
    const isEdit = type === 'editContact'
    const { store, dispatch } = useGlobalReducer()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [showAlert, setShowAlert] = useState(false)

    useEffect (()=>{
        console.log(store)
        if (isEdit){
            setName(store.contact.name)
            setPhone(store.contact.phone)
            setEmail(store.contact.email)
            setAddress(store.contact.address)
        }

    },[])
    

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
               
            }

        } catch (error) {
            console.log(error);

        }


    }
    const addContatsNavigate = async (e) => {
        e.preventDefault()
        setShowAlert(true)
        await addContacts()
     
    }
    const EditContactList = async()=>{
        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/Pedro/contacts/${store.contact.id}`,{
               method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "name": name,
                    "phone": phone,
                    "email": email,
                    "address": address,
            })
            }
            
            )
            
        } catch (error) {
            console.log(error)
        }
    }
    const editContactSingle = async(e) => {
          e.preventDefault()
            setShowAlert(true)
            await EditContactList()

    }


    return (
        <form className="container-fluid">
            <h1 className="text-center m-5">Add New Contact</h1>
            {showAlert && (
                <div className="alert alert-success" role="alert">
                    Usuario Creado Con Éxito
                </div>
            )}
            <div className="d-flex justify-content-center row">
                <div className="d-flex justify-content-center">
                    <input className="col-5 rounded m-3 text-center" type="text" placeholder="NOMBRE" onChange={e => setName(e.target.value)} value={name} />
                </div>
                <div className="d-flex justify-content-center">
                    <input className="col-5 rounded m-3 text-center" type="tel" placeholder="TELEFONO" onChange={e => setPhone(e.target.value)} value={phone} />
                </div>
                <div className="d-flex justify-content-center">
                    <input className="col-5 rounded m-3 text-center" type="email" placeholder="EMAIL" onChange={e => setEmail(e.target.value)} value={email} />
                </div>
                <div className="d-flex justify-content-center">
                    <input className="col-5 rounded m-3 text-center" type="text" placeholder="DIRECCION" onChange={e => setAddress(e.target.value)} value={address} />
                </div>
                {isEdit ? ( <div className="d-flex justify-content-center">
                    {showAlert ? <Spinner/> :  <button onClick={editContactSingle}>Editar Contacto</button>}                    
                </div>

                ):(
                     <div className="d-flex justify-content-center">
                    {showAlert ? <Spinner/> :  <button onClick={addContatsNavigate}>Agregar contacto</button>}                    
                </div>
                )}
              
            </div>
        </form>
    )
}