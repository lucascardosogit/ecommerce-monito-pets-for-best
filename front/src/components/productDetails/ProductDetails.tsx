import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pet } from "../../types/PetType";
import { Item } from "../../types/ItemType";
import './ProductDetails.css';

function ProductDetails() {
  const { type, id } = useParams();
  const [product, setProduct] = useState<Pet | Item>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const path = `/${type}/${id}`;
        const response = await fetch(`/api${path}`);
        
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('An error has occurred on product detail search: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [type, id]);

  const isPet = type === 'pets';
  
  if (loading || !product) {
    return <div>Loading product details...</div>;
  }

  return (
    <>
      <main>
        <div className="product-details-container">
        <div className="images-details">
            <div className="product-main-image">
            <img 
              src={product.images[0]} 
              alt={product.name} 
            />
            </div>
            <div className="product-secondary-images">
                <ul>
                {
                  product.images.map((img, index) => {
                      return <li key={`${index}+${product.name}`}><img src={img} alt={`Image ${index + 1}`}/></li>
                  })
                }
                </ul>
            </div>
        </div>
          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="product-price">{product.price}</p>
            <div className="product-actions">
                <button className="primary-btn">Contact Us</button>
                <button className="secondary-btn">Chat with Monito</button>
            </div>
            {isPet && (
                <div className="pet-details">
                <p>SKU: {(product as Pet).sku}</p>
                <p>Gender: {(product as Pet).gender}</p>
                {(product as Pet).color && <p>Age: {(product as Pet).age} Months</p>}
                {(product as Pet).size && <p>Size: {(product as Pet).size}</p>}
                <p>Color: {(product as Pet).color}</p>
                <p>Vaccinated: {(product as Pet).vaccinated}</p>
                <p>Dewormed: {(product as Pet).dewormed}</p>
                <p>Cert: {(product as Pet).certification}</p>
                <p>Microchip: {(product as Pet).microchip}</p>
                <p>Location: {(product as Pet).location}</p>
                <p>Published date: {(product as Pet).publishedDate.toString()}</p>
                <p>Aditional Information: {(product as Pet).additionalInformation}</p>



                </div>
            )}
            
            {!isPet && (
                <div className="item-details">
                <p>Produto: {(product as Item).product}</p>
                {(product as Item).size && <p>Tamanho: {(product as Item).size}</p>}
                </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductDetails;