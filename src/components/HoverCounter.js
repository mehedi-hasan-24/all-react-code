import React, {Component} from 'react';

class HoverCounter extends Component {
    render() {
        const {count, setCounter, theme} = this.props;
        const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#222'} : null;
        return (
            <div>
                <h1 onMouseOver={setCounter} style={style}>Hover {count} times.</h1>
            </div>
        );
    }
}

export default HoverCounter;
