import '../../../App.css';
import './ProductCardPet.css';

interface ProductCardPetProps {
    id?: number;
    title: string;
    genre: string;
    age: number;
    price: string;
    image: string;
    onCardClick?: (id: number) => void;
}

export default function ProductCardPet({
    id,
    title,
    genre,
    age,
    price,
    image,
    onCardClick,
}: ProductCardPetProps) {
    const handleClick = () => {
        if(onCardClick && id) {
            onCardClick(id);
        }
    };

    const formatAge = (months?: number) => {
        return `${months} ${months === 1 ? "year" : "years"}`;
    };

    return (
        <div className={`pet-product-card`} onClick={handleClick} >
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <div className='pet-info'>
                {genre && <p>Genre: {genre}</p>}
                {age !== undefined && <p>Age: {formatAge(age)}</p>}
            </div>
            <p className='price'>{price}</p>
        </div>
    );
}