import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div style={{'margin-top': '10rem'}}>
            <Link to="/login">Login</Link>
            <Link to="/signup">Login</Link>
            <Link to="/todo_list">Login</Link>
        </div>
    )
}
