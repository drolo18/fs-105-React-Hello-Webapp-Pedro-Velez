import { useState , useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"


export const Home = () => {

	const [ phoneBooks, setPhoneBooks] = useState([])
	const {store, dispatch} = useGlobalReducer()

	const getContacts = async() =>{
		try {
			const response = await fetch('https://playground.4geeks.com/contact/agendas/Pedro')
			const data = await response.json()
			dispatch({ 
				type: 'setContacts',
				payload: data.contacts
			})
			
			
		} catch (error) {
			console.log(error);
			
		}

	}
	useEffect(() => {
		getContacts()
	}, [])

	return (
		<div className="text-center mt-5">
			{store.contacts.map((contacts)=>(
				<div key={contacts.id}>
					<h1>{contacts.name}</h1>
					<p>{contacts.phone}</p>
					<p>{contacts.email}</p>
					<p>{contacts.address}</p>
				</div>

			))
			}
			
		</div>
	);
}; 