import './App.css';
import Parent from "./components/Parent";
import Child from "./components/Child";
import {Component} from "react";

function App() {
  return (
    <div >
        <ClassComponent></ClassComponent>
        <ClassComponent></ClassComponent>
    </div>
  );
}
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color} style={{backgroundColor: props.color}}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="green">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        console.log("constructor called!")
    }
    render() {
        return (
            <div>
                Class component
            </div>
        );
    }
}

export default App;
