import React, {Component} from 'react';

class HoverCounter extends Component {
    render() {
        const {count, setCounter} = this.props;
        return (
            <div>
                <h1 onMouseOver={setCounter}>Hover {count} times.</h1>
            </div>
        );
    }
}

export default HoverCounter;
