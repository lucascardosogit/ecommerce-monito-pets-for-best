export default function PetKnowledge() {
    return (
        <section id="pet-knowledge" className="container">
            <p>You already know ?</p>
            <p><span className="emphasis">Useful pet knowledge</span></p>
            <button className="secondary-btn">View more <img src="/images/resources/right-arrow.svg" alt="Right-arrow" /></button>
            <div id="infos">
                <div className="card">
                    <img src="/images/pet-knowledge/pomerian-dog.png" alt="Pomerian dog running" />
                    <small className="pet-knowledge-tag">Pet knowledge</small>
                    <p className="news-title">What is a Pomeranian? How to Identify Pomeranian Dogs</p>
                    <p className="news-description">The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.</p>
                </div>

                <div className="card">
                    <img src="/images/pet-knowledge/dog-diet.png" alt="Pomerian dog running" />
                    <small className="pet-knowledge-tag">Pet knowledge</small>
                    <p className="news-title">Dog Diet You Need To Know</p>
                    <p className="news-description">Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.</p>
                </div>

                <div className="card">
                    <img src="/images/pet-knowledge/dogs-bite.png" alt="Pomerian dog running" />
                    <small className="pet-knowledge-tag">Pet knowledge</small>
                    <p className="news-title">Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively</p>
                    <p className="news-description">Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.</p>
                </div>
            </div>
        </section>
    )
}