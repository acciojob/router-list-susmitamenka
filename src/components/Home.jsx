import React from "react"
import { Link } from "react-router-dom"

function Home(){
    return(
        <>
        <h1>Item List</h1>
        <ul>
            <li><Link to="/Item1">Item1</Link></li>
            <li><Link to="/Item2">Item2</Link></li>
            <li><Link to="/item3">Item3</Link></li>
        </ul>
        </>
    )
}
export default Home