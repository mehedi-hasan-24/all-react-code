import React, {Component} from 'react';
import HoverCounter from "./HoverCounter";
import Counter from "./Counter";
import themeContext from "../contexts/themeContext";

class Content extends Component{
    render() {
        return (
            <div>
                <h1>Content</h1>
                <Counter  render = {
                    (count, setCounter)=>{
                        return <themeContext.Consumer>
                            {({theme, switchTheme}) => <HoverCounter count={count} setCounter={setCounter} theme={theme} switchTheme={switchTheme}/>}
                        </themeContext.Consumer>
                    }
                } >
                </Counter>
            </div>
        );
    }
}

export default Content;
