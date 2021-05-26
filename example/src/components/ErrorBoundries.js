import React, { Component } from 'react'

export default class ErrorBoundries extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false}
    }
    static getDerivedStateFromError(error) {
        console.log('error', error)
        return {hasError: true}
    }
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
