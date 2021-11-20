
import "./Home.css"
import { useEffect, useState } from "react";
import { NavLink} from "react-router-dom";


// images
import yulduz from "../../assets/images/yulduz.svg"
import bobur from "../../assets/images/bobur.png"
import schedule from "../../assets/images/schedule.svg"
import img from "../../assets/images/img.svg"
import gif from "../../assets/images/gif.svg"
import status from "../../assets/images/stats.svg"





const Home = ()=>{

    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(date => setUsers(date))
    }, [])


    return(
        <>
            <div className="inner__container">
                <div className="home-title">
                    <h2>Home</h2>
                    <img src={yulduz} alt="" />
                </div>
                <div className="home-avatar">
                   <div>
                        <img src={bobur} alt="" />
                        <span>What’s happening</span>
                   </div>
                    <div className="home-avatar_item">
                        <div>
                            <img src={img} alt="" />
                            <img src={gif} alt="" />
                            <img src={status} alt="" />
                            <img src={schedule} alt="" />
                        </div>
                        <button className="home-avatar_button">Tweet</button>
                    </div>
                </div>
                {users.length > 0 && <ul >
                    
                    {users.map((user)=>(
                        <li key={user.id} className="user" onClick={()=>{window.localStorage.setItem("test",user.id)}}>
                            <NavLink to={`/user/${user.id}`}>
                            <div className="inner-user">
                            <span className="user-avatar">{user.id}</span>
                                <div>
                                <h3> {user.name}</h3>
                                <p>{user.company.catchPhrase}</p>
                                </div>
                            </div>
                            </NavLink>
                        </li>
                    )) }
                </ul>}
            </div>
            </>
    )
}
export default Home;
