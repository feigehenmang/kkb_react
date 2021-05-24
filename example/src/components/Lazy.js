import React, { Component, Suspense } from 'react'

export default class Lazy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Comp: null
        }
    }
    loadComponent = () => {
        import('./Dymic').then(result => {
            console.log('dymic', result)
            this.setState({
                Comp: result.default
            })
        })
    }
    render() {
        // const Comp = this.state.Comp;
        // return (
        //     <div>
        //         <button onClick={this.loadComponent}>Import Component</button>
        //         {Comp && <Comp></Comp>}
        //     </div>
        // )
        const Comp = React.lazy(() => import('./Dymic'))
        return (
            <div>
                <button onClick={this.loadComponent}>Import Component</button>
                <Suspense fallback={<h1>LOADING</h1>}>
                    <Comp></Comp>
                </Suspense>
            </div>
        )
    }
}
