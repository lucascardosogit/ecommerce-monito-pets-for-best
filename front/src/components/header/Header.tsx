import logo from '/images/resources/monito-logo.svg'
import vndLogo from '/images/resources/vnd-logo.svg'
import downArrow from '/images/resources/down-arrow.svg'
import '../../App.css';
import './Header.css';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><img src={logo} alt="Monito's logo" /></li>
                    <li>Home</li>
                    <li>Category</li>
                    <li>About</li>
                    <li><a href="contact">Contact</a></li>
                </ul>

                <div>
                    <input type="text" placeholder="Search something here!" />
                    <button className="primary-btn">Join the community</button>
                    <p><img src={vndLogo} alt="Vietnamese Dongs logo" />VND <img src={downArrow} alt="Down-arrow" /></p>
                </div>
            </nav>
        </header>
    );
}