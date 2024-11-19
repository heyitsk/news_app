import '../styles/header.css'

const Header = () => {
    return(
        <div id='header'>
        <div id="header-container">
            <button id="search">Search</button>
            <img src='https://logoeps.com/wp-content/uploads/2014/05/21601-news-logo-icon-vector-icon-vector-eps.png' alt='bbclogo'/>
            <div id='button'>
            <button id="register">Register</button>
            <button id="signup">Sign Up</button>
            </div>
        </div>
        <div class='linebrk'></div>

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
        <div class='linebrk'></div>

        <div id='trending-topic'>
            <ul>
                <li><a href=''>Israel-Gaza war</a></li>
                <li><a href=''>War in Ukraine</a></li>
                <li><a href=''>US Election</a></li>
                <li><a href=''>US & Canada</a></li>
                <li><a href=''>UK</a></li>
                <li><a href=''>Africa</a></li>
                <li><a href=''>Asia</a></li>
                <li><a href=''>Europe</a></li>
                <li><a href=''>Latin America</a></li>
                <li><a href=''>Middle East</a></li>
                <li><a href=''>In Pictures</a></li>
                <li><a href=''>BBC InDepth</a></li>
                <li><a href=''>BBC Verify</a></li>
            </ul>
        </div>
        <div class='linebrk'></div>
        </div>
    )
}
export default Header;