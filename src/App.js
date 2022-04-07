import './App.css';
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <div >
      <Counter render = {
          (count, setCounter)=>(<ClickCounter count={count} setCounter={setCounter}/>)
        }
      />
        <Counter render = {
            (count, setCounter) => (<HoverCounter count = {count} setCounter={setCounter} />)
        }/>
    </div>
  );
}

export default App;
