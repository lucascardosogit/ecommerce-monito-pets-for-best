interface ProductCardItemProps {
    title: string;
    product: string;
    size: string;
    price: string;
}

export default function ProductCardItem({
    title,
    product,
    size,
    price,
}: ProductCardItemProps) {
    return (
        <div className={`item-product-card`} >
            <h3>{title}</h3>
            {product && <p>Product: {product}</p>}
            {size && <p>Size: {size}</p>}
            <p>{price}</p>
        </div>
    );
}