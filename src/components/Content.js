import React from 'react';
import HoverCounter from "./HoverCounter";
import Counter from "./Counter";
import themeContext from "../contexts/themeContext";

function Content() {
    return (
        <div>
            <h1>Content</h1>
            <Counter  render = {
                (count, setCounter)=>{
                    return <themeContext.Consumer>
                        {({theme}) => <HoverCounter count={count} setCounter={setCounter} theme={theme}/>}
                    </themeContext.Consumer>
                }
            } >
            </Counter>
        </div>
    );
}

export default Content;
