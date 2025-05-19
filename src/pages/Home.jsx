import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export const Home = () => {

	const navigate = useNavigate()
	const [phoneBooks, setPhoneBooks] = useState([])
	const { store, dispatch } = useGlobalReducer()

	const getContacts = async () => {
		try {
			const response = await fetch('https://playground.4geeks.com/contact/agendas/Pedro')
			if (!response.ok) {
				createPedro()
				return
			}
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
	const createPedro = async () => {
		try {
			const response = await fetch('https://playground.4geeks.com/contact/agendas/Pedro', {
				method: 'POST',
			})
			getContacts()

		} catch (error) {
			console.log(error)
		}
	}
	const deleteContact = async (id) => {

		try {
			const response = await fetch('https://playground.4geeks.com/contact/agendas/Pedro/contacts/' + id, {
				method: 'DELETE',
			})
			if (response.ok) {
				getContacts()
			}
		} catch (error) {
			console.log(error)
		}

	}

	const editContact = (contact) => {

		dispatch({ type: 'editContact', payload: contact })
		navigate('/edit-contact')
	}



	return (
		<div className="container mt-5">
			<div className="row">
				{store.contacts
					.sort((a, b) => a.name.localeCompare(b.name))
					.map((contact) => (
						<div className="col-12 col-md-6 col-lg-4 mb-4" key={contact.id}>

							<div className="card h-100">
								<div className="card-body d-flex flex-column align-items-center">
									<Link to={`/viewContact/${contact.id}`} style={{ textDecoration: "none", color: "inherit" }}>
										<img
											className="rounded-circle mb-3"
											src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAACbm5v29vbm5uZhYWF1dXW/v7+srKyYmJiwsLBJSUnw8PDr6+szMzN6enqIiIjOzs61tbUpKSkWFhahoaHe3t4gICDX19fGxsanp6eBgYFEREQkJCRvb284ODgNDQ1OTk5nZ2ePj49YOSmzAAADs0lEQVR4nO3ciXqiMBQFYMOOIgpqVWjr0vd/x8p0HJnKFnLxhnD+J8j5WLLdZDYDAAAAAAAAAAAAAAAAAAAAMJGT+MHOsgI/cbibQm+ZrmJRFq/SJXej6DjhRlTZhGY8S/+9Mt6Pd5+7ecrm24Z8hfOcu4lKjm35CtsjdzN7s90O+Qquzd3UfvyO+Qqj/BxXEgGFWHE3V95CKqAQC+4GS7I/JAMKsR/VxxhJ5ytE3M3uzu7SSTzbjucpxu1pKsXcDe+qazf4zOVueje73gGF2HE3vos3hYBCvHE3vwP5fqLsg7v57b6UAgoRcgdo068nLNO9V/xUTvjJHaGZoxxQCL2XNjyChB53iCY2QUAhdB68qXT2Dxl3jAZ7koQa94lqw5kHfQc2NC+pzqPTC1HCC3eQWkQBheAOUudAlvDAHaXGnCyhriv9a7KEa+4oNfqvXvym62pG3wWoZyfuKDXIAmr7M0VCJERCfuYnPJEF1LW3ML/HN3/UZv7I2/zZk/kzYOn6izr61mVYRAkt7iC1KHYtChrvXKjtjt5tuGM0oFkw1Xe5dAo7M+bvrk1gh9T8Xe4JVCrMQsWA2lebqO6S7rmb34H5VV/mV+5NoPpyAhW0E6iCntnnHgHPIwp4iyjfZ4zrNMLM/BMlN7lUwJy7uX0Yf7JrAqfzbo5dfjj78Z6wLKRt/cbIT8kW/Ka/6mKkH+AvTlg9jIsNOa3+h+E3DtwtEz/IsizwEwPDAQAAAAAAAIARbCfxs13uee7N1fPyXeYnznjXgUuiZL52q++FLGzcdTDeRZtDkDfdCVn2ngfa1j1Xc9JcfqM7ztNxLJ86wVU63MM10zul7ZPUJvqa/oKcjKqQXYjFTrtH6Vh0R2R/xJZGIe2A7kxX2SnT43VNVP4sba4Jd7xZRnNhS7096201Ed1ptSZrrqLaJUXX0I3HMbKL5G7RVc748ueoerWevK+X5pMpBqLzuqqG6MISUIjLi15VusOw8oJXBKQ7sd3H8HXSTp/aWFIDD1eP3PluBi2D4/wEHwashAu4s/012P8m5U72TzpMwIQ7V8kgkyqaE7BUhpgb063CUBigtF+Xv8wd+d9Gr3e0QP2evn621IZ6NsWdpwJtQH26wgfa6SLvhKIa7TSDO00lyoBUlzzTojwVzbMu04byQ8y4w1SiXA2nuh6JFuVlS0jIAwmREAn5ISESIiE/JERCJOSHhEg4rYSqlyEOg/KKxSS09BPyV2YCAAAAAAAAAAAAAAAAAAAA/O8bqydBUFBka28AAAAASUVORK5CYII="
											alt=""
											width={100}
											height={100}
										/>
									</Link>
									<h5 className="card-title" >{contact.name}</h5>
									<p className="card-text"><i className="fa-solid fa-phone-flip"></i> {contact.phone}</p>
									<p className="card-text"><i className="fa-solid fa-envelope-open-text"></i> {contact.email}</p>
									<p className="card-text"><i className="fa-solid fa-location-dot"></i> {contact.address}</p>
									<div className="mt-auto d-flex gap-2">
										<button onClick={() => deleteContact(contact.id)} className="btn btn-outline-dark">
											<i className="fa-solid fa-trash"></i>
										</button>
										<button onClick={() => editContact(contact)} className="btn btn-outline-dark">
											<i className="fa-solid fa-pencil"></i>
										</button>
									</div>
								</div>
							</div>

						</div>
					))
				}
			</div>
		</div >
	);
}; 