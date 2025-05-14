import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pet } from '../../types/PetType';
import { Item } from '../../types/ItemType';
import ProductCardPet from './productsCards/ProductCardPet';
import ProductCardItem from './productsCards/ProductCardItem';
import './Gallery.css';
import '../../App.css';

interface GalleryProps {
    type: 'pets' | 'items';
    id: string;
    description: string;
    title: string;
    buttonText: string;
    buttonIcon: string;
}

export default function Gallery({ id, description, title, buttonText, buttonIcon, type }: GalleryProps) {
    const [products, setProducts] = useState<Pet[] | Item[]>([]);
    const navigate = useNavigate();

    const handleCardClick = (id: number) => {
        if(id) {
            navigate(`/${type}/${id}`);
        }
    }

    const fetchProducts = async (path: string) => {
        try {
            const res = await fetch(`api${path}`);
            
            if(!res.ok) { console.error('An error has occurred in fetch products.') }
            
            const json = await res.json();
            setProducts(json)
        } catch (error) {
            console.error('Failed to fetch pets: ', error);
        }
    }

    useEffect(() => {
        const path: string = type === 'pets' 
            ? '/pets' 
            : '/items'

        fetchProducts(path);
    }, [type])

    const handleViewAll = () => {
        navigate(`/${type}`);
    }
    
    return (
        <section id={`${type}-gallery-section`} className="gallery container">
            <div className='gallery-header'>
                <div className='header-text'>
                    <p>{description}</p>
                    <p><span className="emphasis">{title}</span></p>
                </div>
                <div className='header-btn'>
                    <button className="secondary-btn" onClick={handleViewAll}>{buttonText} <img src={buttonIcon} alt="Button icon" /></button>
                </div>
            </div>

            <div id={`${id}-gallery`} className='grid'>
                {type === 'pets'
                    ? (products as Pet[]).map(pet => <ProductCardPet key={'key' + pet.name} id={pet.id} title={pet.name} genre={pet.gender} age={pet.age} price={pet.price} image={pet.images[0]} onCardClick={handleCardClick} /> ) 
                    : (products as Item[]).map(item =>  <ProductCardItem key={'key' + item.name} id={item.id} title={item.name} product={item.product} size={item.size || ''} price={item.price} image={item.images[0]} onCardClick={handleCardClick}/> )
                }
            </div>
        </section>
    )
}