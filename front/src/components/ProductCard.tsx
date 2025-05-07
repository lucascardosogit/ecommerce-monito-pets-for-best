interface ProductCardProps {
    title: string;
    genre?: string;
    age?: number;
    product?: string;
    price: number;
}

export default function ProductCard({
    title,
    genre,
    age,
    product,
    price
}: ProductCardProps) {
    const formatPrice = (value: number) => {
        return `${value.toLocaleString('vi-VN')} VND`;
    };

    const formatAge = (months?: number) => {
        if (months === undefined) return "Age not provided";
        return `${months} ${months === 1 ? "month" : "months"}`;
    };

    return (
        <div className="product-card">
            <h3>{title}</h3>
            {genre && <p>Genre: {genre}</p>}
            {age !== undefined && <p>Age: {formatAge(age)}</p>}
            {product && <p>Product: {product}</p>}
            <p>{formatPrice(price)}</p>
        </div>
    );
}