import './card.css'
import React , {useState , useEffect}from 'react'
import axios from 'axios'

function Cardlayout () {
    const [data, setdata] = useState([]);
    
    useEffect(async() => {
       const res = await axios("https://jsonplaceholder.typicode.com/users")
       setdata(res.data.slice(0,6)) 
    }, []);
    return (
        <div className="test">
            {data.map((item) => {
                return (
                    
                    <div className = "card-layout">
                        <div className="card-details">
                        <h4 className="card-details-name">{item.name}</h4>
                        <h5 className="card-details-name">Username : {item.username}</h5>
                        <h5 className="card-details-name">City : {item.address.city}</h5>
                        <h5 className="card-details-name">Website : {item.website}</h5>
                        
                    </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Cardlayout