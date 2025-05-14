import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdoptionBanner from "../../components/banner/AdoptionBanner";
import { Pet } from "../../types/PetType";
import { Item } from "../../types/ItemType";
import ProductCardPet from "../../components/gallery/productsCards/ProductCardPet";
import ProductCardItem from "../../components/gallery/productsCards/ProductCardItem";
import './Category.css';
import '../../App.css';

export default function Category() {
  const { type } = useParams<{ type: string }>();
  const [products, setProducts] = useState<Pet[] | Item[]>([]);

  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
      if(id) {
          navigate(`/${type}/${id}`);
      }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const path = type === 'pets' ? '/pets' : '/items';
        const response = await fetch(`api${path}`);

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('An error occurred while searching for products: ', error);
      }
    };

    fetchProducts();
  }, [type]);

  return (
    <>
      <AdoptionBanner 
        id={"adoptionbanner3"} 
        title={"One more friend"} 
        subtitle={"!Thousands more fun"} 
        description={"Having a pet means you have more joy, a new friend, a happy person<br/>who will always be with you to have fun. We have 200+ different pets that can meet your needs!"} 
        primaryButtonText={"View Intro"} 
        primaryButtonIcon={"/images/resources/media-arrow.svg"} 
        secondaryButtonText={"Explore Now"} 
        backgroundImage={"/images/banners/Banner3.png"} 
        contentAlignment={"right"}
      />
      
      <section className="products-section container">
        <h2>{type === 'pets' ? 'Pets' : 'Items'}</h2>
        <p>{products.length} in total</p>
        <div className="products-grid">
          {type === 'pets'
            ? (products as Pet[]).map(pet => (
              <ProductCardPet 
                key={pet.id || 'key' + pet.name}
                id={pet.id}
                title={pet.name} 
                genre={pet.gender} 
                age={pet.age} 
                price={pet.price} 
                image={pet.images[0]}
                onCardClick={handleCardClick}
              />
            ))
            : (products as Item[]).map(item => (
              <ProductCardItem 
                key={item.id || 'key' + item.name}
                id={item.id}
                title={item.name} 
                product={item.product} 
                size={item.size || ''} 
                price={item.price} 
                image={item.images[0]}
                onCardClick={handleCardClick}
              />
            ))
          }
        </div>
      </section>
    </>
  );
}
