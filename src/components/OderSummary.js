import { useNavigate } from "react-router-dom"


export const OderSummary = () => {
    const navigate = useNavigate();
  return (
    <>  
    <div>Oder Placed!!!</div>
    <button onClick={()=> navigate(-1)}>Go Back</button>
    </>
  )
}
