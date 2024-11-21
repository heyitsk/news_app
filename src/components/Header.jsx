import { NEWSLOGO_URL } from '../assets/links';
import '../styles/header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div id='header'>
        <div id="header-container">
            <button id="search">Search</button>
            <img src={NEWSLOGO_URL} alt='bbclogo'/>
            <div id='button'>
            <button id="register">Register</button>
            <button id="signup">Sign Up</button>
            </div>
        </div>
        <div className='linebrk'></div>

        <div id='nav-bar'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Sports">Sport</Link></li>
                <li><Link to="/Business">Business</Link></li>
                
                
                <li><a href=''>Arts</a></li>
                <li><a href=''>Travel</a></li>
                
                

            </ul>
        </div>
        <div className='linebrk'></div>
        <div className='linebrk'></div>
        <br></br>
        <h1>TOP HEADLINES</h1>
        <div id='linebrk1'></div>
        </div>

    )
}
export default Header;