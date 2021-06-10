import React from 'react'
import todoLogo from '../../assets/images/todo-icon.jpg'
import "./Header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={todoLogo} alt="todo-logo" />
            </div>
            <h1 className="title">Todo</h1>
        </div>
    )
}
