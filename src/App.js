import './App.css';
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import Section from "./components/Section";
import themeContext from "./contexts/themeContext";

function App() {
  return (
    <div >
      <Counter render = {
          (count, setCounter)=>(<ClickCounter count={count} setCounter={setCounter}/>)
        }
      />
        <themeContext.Provider value={{theme: 'dark'}}>
            <Section />
        </themeContext.Provider>
    </div>
  );
}

export default App;
