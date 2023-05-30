import {Component} from 'react';
import { Menu } from './Menu';
import "./Navbar.css";
import logo from "../../images/Logo-BukaBuku.png";

class Navbar extends Component{
    state = {clicked :false};
    handleClick =() =>{
        this.setState({clicked : 
            !this.state.clicked})
    }
    render(){
        return ( 
            <nav className='NavbarItems'>
                <img src = {logo} alt = "site logo" className='logoBukaBuku'/>
                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked?
                "nav-menu active" : "nav-menu"}>
                    {Menu.map((item, index) =>
                    {
                        return(
                            <li key={index} className={item.cName}>
                                <a href={item.url}>
                                    <i className={item.icon}></i>{item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;
