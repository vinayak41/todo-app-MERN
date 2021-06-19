import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute(props) {
    const isLogin = useSelector(state => state.user.isLogin);
    const {component, path, restricted} = props
    return (
        <Route path={path}>
            {
                (isLogin && restricted) ? <Redirect to="/todos"/> : component
            }
        </Route>
    )
}
