import "./Search.css"


const Search=()=>{
    return(
        <div className="search-container">
             <input className="search-input" type="text"  required placeholder="Search Twitter"/>
             <div className="trends">
                 <ul className="trends-list">
                     <h4>Trends for you</h4>
                     <li >
                         <p>Trending in Germany</p>
                         <h5>Revolution</h5>
                         <span>50.4K Tweets</span>
                     </li>
                     <li>
                         <p>Trending in Germany</p>
                         <h5>Revolution</h5>
                         <span>50.4K Tweets</span>
                     </li>
                     <li>
                         <p>Trending in Germany</p>
                         <h5>Revolution</h5>
                         <span>50.4K Tweets</span>
                     </li>
                 </ul>
             </div>
        </div>
    )
}
export default Search;