export default function PetsGallery() {
    return (
        <section id="pets-gallery" className="container">
            <p>Whats new?</p>
            <p><span className="emphasis">Take a look at some of our pets</span></p>
            <button className="secondary-btn">View more <img src="/images/resources/right-arrow.svg" alt="Right-arrow" /></button>
            <div id="pets"></div>
        </section>
    )
}