import AdoptionBanner from '../../components/AdoptionBanner';
import Hero from '../../components/Hero';
import PetKnowledge from '../../components/PetKnowledge';
import PetSellers from '../../components/PetSellers';
import PetsGallery from '../../components/PetsGallery';
import ProductsGallery from '../../components/Gallery';


function App() {

  return (
    <>
    <main>
      <Hero />
      <PetsGallery />
      <AdoptionBanner id={'1'} title={'One more friend'} subtitle={'Thousands more fun!'} description={'Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!'} primaryButtonText={'View Intro'} primaryButtonIcon={'/images/resources/media-arrow.svg'} secondaryButtonText={'Explore Now'} backgroundImage={'/images/banners/Banner1.png'} contentAlignment={'right'} />
      <ProductsGallery />
      <PetSellers />
      <AdoptionBanner id={'2'} title={'Adoption'} titleIcon={'/images/resources/paw.svg'} subtitle={'We need help. so do they.'} description={'Adopt a pet and give it a home, it will be love you back unconditionally.'} primaryButtonText={'Explore Now'} secondaryButtonText={'View Intro'} secondaryButtonIcon={'/images/resources/media-arrow.svg'} backgroundImage={'/images/banners/Banner2.png'} contentAlignment={'left'} />
      <PetKnowledge />
    </main>
    </>
  );
}

export default App;