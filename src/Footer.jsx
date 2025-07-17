
function Footer(){
    return (
        <footer>
            <div className="footer-content">
                <h3>NEXA</h3>
                <p>Smart, reliable, and built to empower your Discord server. Nexa is currently in beta - stay tuned for launch updates.</p>
            </div>
            <div>
                <div className="footerlinks">
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li>-</li>
                        <li><a href="#">Terms of Service</a></li>
                        <li>-</li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            
                <p className="footer-credit">
                    © {new Date().getFullYear()} Nexa • Designed by <a href="https://www.createdbyamir.com/" target="_blank" rel="noopener noreferrer">Created By Amir</a>
                </p>
            </div>

        </footer>
    );
}

export default Footer