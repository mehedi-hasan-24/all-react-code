import React, {Component} from 'react';

class HoverCounter extends Component {
    render() {
        const {count, setCounter, theme, switchTheme} = this.props;
        const style = theme.theme === 'dark' ? { backgroundColor: '#000000', color: '#222'} : null;
        console.log(style)
        return (
            <div>
                <h1 onMouseOver={setCounter} style={style}>Hover {count} times.</h1>
                <button type="button" onClick={switchTheme}>Change theme</button>
            </div>
        );
    }
}

export default HoverCounter;
