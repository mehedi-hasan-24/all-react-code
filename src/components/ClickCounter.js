import React, {Component} from 'react';

class ClickCounter extends Component {
    render() {
        const {count, setCounter} = this.props;
        return (
            <div>
                <button onClick={setCounter}>Clicked {count} times</button>
            </div>
        );
    }
}

export default ClickCounter;
