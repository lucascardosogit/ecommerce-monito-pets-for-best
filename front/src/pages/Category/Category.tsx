import AdoptionBanner from "../../components/AdoptionBanner";
// import ProductsGallery from "../../components/Gallery";

function App() {

  return (
    <>
    <main>
      <AdoptionBanner id={"3"} title={"One more friend"} subtitle={"Thousands more fun!"} description={"Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"} primaryButtonText={"View Intro"} primaryButtonIcon={"/images/resources/media-arrow.svg"} secondaryButtonText={"Explore Now"} backgroundImage={"/images/banners/Banner3.png"} contentAlignment={"left"}/>
      {/* <ProductsGallery /> */}
    </main>
    </>
  );
}

export default App;