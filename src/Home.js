import  {useNavigate} from 'react-router-dom'

const Home=()=>{
    const navigate=useNavigate()

    return(
        <div>
            Home <br/>
            <button onClick={()=>navigate('order-summary',{replace:true})}>PLACE ORDER</button>

        </div>
    )
}
export default Home;