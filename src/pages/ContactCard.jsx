import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link, useParams } from "react-router-dom";

export const ContactCard = ({contact}) => {
    const { store, dispatch } = useGlobalReducer()
    const { theId } = useParams()


    const selectedContact = contact || store.contacts.find(contact => String(contact.id) === String(theId))

    if (!selectedContact) return <h2>Contacto no encontrado</h2>

    return (
        <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center">
                <img
                    className="rounded-circle mb-3"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAACbm5v29vbm5uZhYWF1dXW/v7+srKyYmJiwsLBJSUnw8PDr6+szMzN6enqIiIjOzs61tbUpKSkWFhahoaHe3t4gICDX19fGxsanp6eBgYFEREQkJCRvb284ODgNDQ1OTk5nZ2ePj49YOSmzAAADs0lEQVR4nO3ciXqiMBQFYMOOIgpqVWjr0vd/x8p0HJnKFnLxhnD+J8j5WLLdZDYDAAAAAAAAAAAAAAAAAAAAMJGT+MHOsgI/cbibQm+ZrmJRFq/SJXej6DjhRlTZhGY8S/+9Mt6Pd5+7ecrm24Z8hfOcu4lKjm35CtsjdzN7s90O+Qquzd3UfvyO+Qqj/BxXEgGFWHE3V95CKqAQC+4GS7I/JAMKsR/VxxhJ5ytE3M3uzu7SSTzbjucpxu1pKsXcDe+qazf4zOVueje73gGF2HE3vos3hYBCvHE3vwP5fqLsg7v57b6UAgoRcgdo068nLNO9V/xUTvjJHaGZoxxQCL2XNjyChB53iCY2QUAhdB68qXT2Dxl3jAZ7koQa94lqw5kHfQc2NC+pzqPTC1HCC3eQWkQBheAOUudAlvDAHaXGnCyhriv9a7KEa+4oNfqvXvym62pG3wWoZyfuKDXIAmr7M0VCJERCfuYnPJEF1LW3ML/HN3/UZv7I2/zZk/kzYOn6izr61mVYRAkt7iC1KHYtChrvXKjtjt5tuGM0oFkw1Xe5dAo7M+bvrk1gh9T8Xe4JVCrMQsWA2lebqO6S7rmb34H5VV/mV+5NoPpyAhW0E6iCntnnHgHPIwp4iyjfZ4zrNMLM/BMlN7lUwJy7uX0Yf7JrAqfzbo5dfjj78Z6wLKRt/cbIT8kW/Ka/6mKkH+AvTlg9jIsNOa3+h+E3DtwtEz/IsizwEwPDAQAAAAAAAIARbCfxs13uee7N1fPyXeYnznjXgUuiZL52q++FLGzcdTDeRZtDkDfdCVn2ngfa1j1Xc9JcfqM7ztNxLJ86wVU63MM10zul7ZPUJvqa/oKcjKqQXYjFTrtH6Vh0R2R/xJZGIe2A7kxX2SnT43VNVP4sba4Jd7xZRnNhS7096201Ed1ptSZrrqLaJUXX0I3HMbKL5G7RVc748ueoerWevK+X5pMpBqLzuqqG6MISUIjLi15VusOw8oJXBKQ7sd3H8HXSTp/aWFIDD1eP3PluBi2D4/wEHwashAu4s/012P8m5U72TzpMwIQ7V8kgkyqaE7BUhpgb063CUBigtF+Xv8wd+d9Gr3e0QP2evn621IZ6NsWdpwJtQH26wgfa6SLvhKIa7TSDO00lyoBUlzzTojwVzbMu04byQ8y4w1SiXA2nuh6JFuVlS0jIAwmREAn5ISESIiE/JERCJOSHhEg4rYSqlyEOg/KKxSS09BPyV2YCAAAAAAAAAAAAAAAAAAAA/O8bqydBUFBka28AAAAASUVORK5CYII="
                    alt=""
                    width={100}
                    height={100}
                />
                <h5 className="card-title" >{selectedContact.name}</h5>
                <p className="card-text"><i className="fa-solid fa-phone-flip"></i> {selectedContact.phone}</p>
                <p className="card-text"><i className="fa-solid fa-envelope-open-text"></i> {selectedContact.email}</p>
                <p className="card-text"><i className="fa-solid fa-location-dot"></i> {selectedContact.address}</p>
                <Link to="/">Go To Home</Link>
            </div>
        </div>
            
    )
}