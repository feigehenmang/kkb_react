import React from "react";

export class Ref extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }
    componentDidMount() {
        // console.log(this.ref.current.focus);
        this.ref.current.focus();
    }
    render() {
        return (
            <div>
                <input ref={this.ref} />
            </div>
        )
    }
}