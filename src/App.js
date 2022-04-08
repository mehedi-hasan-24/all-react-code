import './App.css';
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import Section from "./components/Section";
import themeContext from "./contexts/themeContext";
import {useState} from "react";

function App() {
    const [theme, setTheme] = useState({theme: 'dark'});

    const switchTheme = () =>{
        setTheme(({theme}) =>{
            if(theme === 'dark') {
                return {theme: 'light'}
            }
            return {theme: 'dark'};
        })
    }
  return (
    <div >
      <Counter render = {
          (count, setCounter)=>(<ClickCounter count={count} setCounter={setCounter}/>)
        }
      />
        <themeContext.Provider value={{theme, switchTheme}}>
            <Section />
        </themeContext.Provider>
    </div>
  );
}

export default App;
