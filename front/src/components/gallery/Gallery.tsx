import { useEffect, useState } from 'react';
import { Pet } from '../../types/PetType';
import { Item } from '../../types/ItemType';
import ProductCardPet from './productsCards/ProductCardPet';
import ProductCardItem from './productsCards/ProductCardItem';
import './Gallery.css';

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
    
    return (
        <section id={`${type}-gallery-section`} className="container gallery">
            <p>{description}</p>
            <p><span className="emphasis">{title}</span></p>
            <button className="secondary-btn">{buttonText} <img src={buttonIcon} alt="Button icon" /></button>

            <div id={`${id}-gallery`} className='grid container'>
                {type === 'pets'
                    ? (products as Pet[]).map(pet => <ProductCardPet key={'key' + pet.name} title={pet.name} genre={pet.gender} age={pet.age} price={pet.price} /> ) 
                    : (products as Item[]).map(item =>  <ProductCardItem key={'key' + item.name} title={item.name} product={item.product} size={item.size || ''} price={item.price} /> )
                }
            </div>
        </section>
    )
}