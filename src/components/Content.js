import React, { useContext} from 'react';
import HoverCounter from "./HoverCounter";
import Counter from "./Counter";
import themeContext from "../contexts/themeContext";

export default function Content(){
    const context = useContext(themeContext);
    const {theme, switchTheme} = context;
    return (
        <div>
            <h1>Content</h1>
            <Counter  render = {
                (count, setCounter)=>{
                    return <HoverCounter count={count} setCounter={setCounter} theme={theme} switchTheme={switchTheme}/>
                }
            } >
            </Counter>
        </div>
    );
}
