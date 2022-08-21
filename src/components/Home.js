import { useNavigate } from "react-router-dom"
export const Home = () => {
    const navigate = useNavigate(); 
    return(
        <div>
            Home Page
            <button onClick={()=> navigate('oder-summary')}>Place Oder</button>
        </div>
    )
}