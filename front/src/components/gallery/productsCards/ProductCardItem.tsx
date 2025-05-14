import '../../../App.css';
import './ProductCardItem.css';

interface ProductCardItemProps {
    id?: number;
    title: string;
    product: string;
    size: string;
    price: string;
    image: string;
    onCardClick?: (id: number) => void;
}

export default function ProductCardItem({
    id,
    title,
    product,
    size,
    price,
    image,
    onCardClick,
}: ProductCardItemProps) {
    const handleClick = () => {
        if(onCardClick && id) {
            onCardClick(id);
        }
    };

    return (
        <div className={`item-product-card`} onClick={handleClick} >
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <div className='item-info'>
                {product && <p>Product: {product}</p>}
                {size && <p>Size: {size}</p>}
            </div>
            <p className='price'>{price}</p>
        </div>
    );
}