import ProductCard from './ProductCard';

interface GalleryProps {
    id: string;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonIcon: string;
}

export default function Gallery({
    id,
    title,
    subtitle,
    buttonText,
    buttonIcon,
}: GalleryProps) {
    const products = [
        { id: 1, title: 'Buddy', genre: 'Male', age: 12, price: 800000 },
        { id: 2, title: 'Mittens', genre: 'Female', age: 8, price: 1200000 },
        { id: 3, title: 'Goldie', genre: 'Fish', price: 500000 },
    ];

    return (
        <section
        id={`${id}-container`}
        className="container">
        <p>{title}</p>
        <p><span className="emphasis">{subtitle}</span></p>
        <button className="secondary-btn">{buttonText} <img src={buttonIcon} alt="Button icon" /></button>
        <div id={`${id}-gallery`}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    title={product.title}
                    genre={product.genre}
                    age={product.age}
                    price={product.price}
                />
            ))}
        </div>
    </section>
    )
}