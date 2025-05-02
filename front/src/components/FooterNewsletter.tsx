export default function FooterNewsletter() {
    return (
        <section id="footer-newsletter" className="container">
            <div className="subscribe-card">
                <h2>Register now so you don't miss our programs</h2>
                <input type="text" placeholder="Enter your Email" />
                <button>Subscribe Now</button>    
            </div>

            <div id="footer-icons">
                <div id="list">
                    <ul>
                        <li>Home</li>
                        <li>Category</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                
                <div id="svgs">
                    <a href="https://www.facebook.com"><img src="/images/footer/facebook-icon.svg" alt="Facebook icon" /></a>
                    <a href="https://x.com"><img src="/images/footer/twitter-icon.svg" alt="Twitter icon" /></a>
                    <a href="https://www.instagram.com"><img src="/images/footer/instagram-icon.svg" alt="Instagram icon" /></a>
                    <a href="https://www.youtube.com"><img src="/images/footer/youtube-icon.svg" alt="Youtube icon" /></a>                   
                </div>
            </div>

            <footer>
                <p>&copy; 2025 Monito. All rights reserved.</p>
                <img src="/images/resources/monito-logo.svg" alt="Monito's logo" />
                <p><a href="#">Terms of Service</a></p>
                <p><a href="#">Privacy Policy</a></p>
            </footer>
        </section>
    )
}