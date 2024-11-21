import "../styles/Footer.css";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>NewsApp</h3>
                    <p>Your daily source for the latest headlines.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        
                        
                        
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