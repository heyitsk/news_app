import '../styles/header.css'

const Header = () => {
    return(
        <div id='header'>
        <div id="header-container">
            <button id="search">Search</button>
            <img src='https://logos-world.net/wp-content/uploads/2022/01/BBC-Logo.png' alt='bbclogo'/>
            <div id='button'>
            <button id="register">Register</button>
            <button id="signup">Sign Up</button>
            </div>
        </div>
        <br></br>
        <div id='nav-bar'>
            <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''>News</a></li>
                <li><a href=''>Sport</a></li>
                <li><a href=''>Business</a></li>
                <li><a href=''>Innovation</a></li>
                <li><a href=''>Culture</a></li>
                <li><a href=''>Arts</a></li>
                <li><a href=''>Travel</a></li>
                <li><a href=''>Earth</a></li>
                <li><a href=''>Video</a></li>
                <li><a href=''>Live</a></li>

            </ul>
        </div>
        </div>
    )
}
export default Header;