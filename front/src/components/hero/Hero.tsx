import '../../App.css';
import './Hero.css';

export default function Hero() {
    return (
        <section id="hero" className="container">
            <div className='hero-text'>
            <h1>One more friend</h1>
            <h2>Thousands more fun!</h2>
            <p>Having a pet means you have more joy, a new friend, a happy<br/>person who will always be with you to have fun. We have 200+<br/>different pets that can meet your needs!</p>
            </div>
            <div className='hero-btn'>
            <button className="secondary-btn">View Intro <img src="/images/resources/media-arrow.svg" alt="Media-arrow" /></button>
            <button className="primary-btn">Explore Now</button>
            </div>
        </section>
    )
}