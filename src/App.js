import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {CSSTransition} from "react-transition-group";
function App() {
  return (
    <Navbar>
        <NavItem icon={`Hi`} />
        <NavItem icon={`Hello`} />
        <NavItem icon={`Konnichiwa`}>Konnichiwa</NavItem>
        <NavItem icon={`Open`} >
            <DropDownMenu></DropDownMenu>
        </NavItem>
    </Navbar>
  );
}

function DropDownMenu(){
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    function calcHeight(el){
        const height = el.offsetHeight;
        setMenuHeight(height);
    }
    function DropDownItem(props){
        return (
            <a href={`#`} className={`menu-item`} onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu)}>
                {/*
                    for dynamically set the left or right icon. If any left or right Icon is sent
                    the Icon will be rendered. Otherwise not!
                */}
                <span className={`icon-button`}>{props.leftIcon}</span>
                {props.children}
                <span className={`icon-right`}>{props.rightIcon}</span>
            </a>
        )
    }
    return(
        <div className={`dropdown`} style={{height: menuHeight}}>
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames={`menu-primary`}
                onEnter = {calcHeight}
            >
                <div className={`menu`}>
                    <DropDownItem goToMenu={`settings`}>Without Icon</DropDownItem>
                    <DropDownItem leftIcon={`left-icon`}>Left Icon</DropDownItem>
                    <DropDownItem rightIcon={`right-icon`}>Right Icon</DropDownItem>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'settings'}
                unmountOnExit
                timeout={500}
                classNames={`menu-secondary`}
                onEnter = {calcHeight}
            >
                <div className={`menu`}>
                    <DropDownItem goToMenu={`main`}>go back</DropDownItem>
                    <DropDownItem goToMenu={`main`}>go back</DropDownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}

function NavItem(props){
    const [open, setOpen] = useState(false);
    return (
        <li className="nav-item">
            <a href="#" className={`icon-button`} onClick={() => setOpen(!open)}>{props.icon}</a>
            {open && props.children}
        </li>
    )
}

export default App;
