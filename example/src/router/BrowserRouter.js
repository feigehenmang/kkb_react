import React from 'react'
import Router from './Router'
import { createBrowserHistory } from 'history'

export default function BrowserRouter({children, ...otherProps}) {
    const history = createBrowserHistory();
    return (
        <Router {...otherProps} history={history}>{children}</Router>
    )
}
