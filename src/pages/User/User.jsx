import { useEffect, useState } from "react"
import "./User.css"


const User=()=>{
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${window.localStorage.getItem('test')}`)
        .then(res=> res.json())
        .then(date=> setPosts(date))
    },[])
    return(
        <div className="inner__container">
            <h1>Users</h1>
            {posts.length > 0 && <ul className="post-list">
                {posts.map((post)=>(
                    <li className="post-item" key = {post.id}>
                        <span className="post-span">{post.userId}</span>
                        <div>
                            <h2 className="post-name">{post.userId}</h2>
                            <p className="post-text">{post.body}</p>
                        </div>
                    </li>
                ))}
                </ul>}
        </div>
    )
}
export default User;