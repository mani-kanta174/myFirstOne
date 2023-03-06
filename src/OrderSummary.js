import  {useNavigate} from 'react-router-dom'

const OrderSummary=()=>{
    const navigate=useNavigate()

    return(
        <div>
            ORDER COIRNFORMED!!!! <br />
            <button onClick={()=>navigate(-1)}>GO BACK</button>

        </div>
    )
}
export default OrderSummary