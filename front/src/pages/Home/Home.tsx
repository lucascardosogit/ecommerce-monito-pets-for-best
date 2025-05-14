import AdoptionBanner from '../../components/banner/AdoptionBanner';
import Hero from '../../components/hero/Hero';
import PetKnowledge from '../../components/petKnowledge/PetKnowledge';
import Gallery from '../../components/gallery/Gallery';
import PetSellers from '../../components/petSellers/PetSellers';


function Home() {

  return (
    <>
    <main>
      <div className="hero-background"></div>
      <Hero />
      <Gallery
      id="pet-container"
      title="Take a look at some of our pets"
      description="Whats new?"
      buttonText="View more"
      buttonIcon="/images/resources/right-arrow.svg"
      type="pets"
      />
      <AdoptionBanner
      id="adoptionbanner1"
      title="One more friend"
      subtitle="!Thousands more fun"
      description="Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
      primaryButtonText="View Intro"
      primaryButtonIcon="/images/resources/media-arrow.svg"
      secondaryButtonText="Explore Now"
      backgroundImage="/images/banners/Banner1.png"
      contentAlignment="right"
      />
      <Gallery
      id="item-container"
      title="Our Products"
      description="Hard to choose right products for your pets?"
      buttonText="View more"
      buttonIcon="/images/resources/right-arrow.svg"
      type="items"
      />
      <PetSellers />
      <AdoptionBanner
      id="adoptionbanner2"
      title="Adoption"
      titleIcon="/images/resources/paw.svg"
      subtitle="We need help. so do they."
      description="Adopt a pet and give it a home, it will be love you back unconditionally."
      primaryButtonText="Explore Now"
      secondaryButtonText="View Intro"
      secondaryButtonIcon="/images/resources/media-arrow.svg"
      backgroundImage="/images/banners/Banner2.png"
      contentAlignment="left"
      />
      <PetKnowledge />
    </main>
    </>
  );
}

export default Home;