import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "../utils";
import './index.css'

const Home = () => {
    const navigate = useNavigate();
    const [loggedInUser, setLogedInUser] = useState('');
    const [products, setProducts] = useState(''); 

    useEffect(() => {
        setLogedInUser(localStorage.getItem('loggedInUser'))
    }, [])
    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Loggedout')
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }

    const fetchProducts = async() => {
        try{
            const url = 'http://localhost:8080/products'
            const headers = {
                headers: {'Authorization': localStorage.getItem('token')}
            }
            const response = await fetch(url, headers);
            const result = await response.json();
            setProducts(result)
        }catch (err){

        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    console.log(products)
    return (
        <div className="home-container">
            <div>
                <h1>Home Page</h1>
                <h2>Welcome {loggedInUser}</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div>
                {
                    products && products?.map((eachItem, Index) => (
                        <ul key={Index}>
                            <span>{eachItem.name} : {eachItem.price}</span>
                        </ul>
                    ))
                }
            </div>
            <ToastContainer />
        </div>
    )
}

export default Home