import './App.css';
import AdoptionBannerOne from './components/AdoptionBannerOne';
import AdoptionBannerTwo from './components/AdoptionBannerTwo';
import FooterNewsletter from './components/FooterNewsletter';
import Header from './components/Header';
import Hero from './components/Hero';
import PetKnowledge from './components/PetKnowledge';
import PetSellers from './components/PetSellers';
import PetsGallery from './components/PetsGallery';
import ProductsGallery from './components/ProductsGallery';

function App() {

  return (
    <>
    <Header />
    <main>
      <Hero />
      <PetsGallery />
      <AdoptionBannerOne />
      <ProductsGallery />
      <PetSellers />
      <AdoptionBannerTwo />
      <PetKnowledge />
      <FooterNewsletter />

    </main>
    </>
  );
}

export default App;
