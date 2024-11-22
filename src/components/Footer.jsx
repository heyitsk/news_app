import "../styles/Footer.css";
import { Link } from "react-router-dom";
 
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>NewsHorizon</h3>
                    <p>Beyond The Breaking News.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="Facebook" className="icons"/>
                        <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="Twitter" className="icons"/>
                        <img src="https://cdn-icons-png.flaticon.com/128/733/733561.png" alt="LinkedIn" className="icons"/>
                    </div>
            </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 NewsApp. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;