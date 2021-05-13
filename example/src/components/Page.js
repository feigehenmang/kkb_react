import { Component } from "react";

export default class Page extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props.location)
    }
    render() {
        return <div>PAGE</div>
    }
}