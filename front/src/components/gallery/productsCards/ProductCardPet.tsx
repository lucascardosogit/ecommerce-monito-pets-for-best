interface ProductCardPetProps {
    title: string;
    genre: string;
    age: number;
    price: string;
}

export default function ProductCardPet({
    title,
    genre,
    age,
    price,
}: ProductCardPetProps) {
    const formatAge = (months?: number) => {
        return `${months} ${months === 1 ? "year" : "years"}`;
    };

    return (
        <div className={`$pet-product-card`} >
            <h3>{title}</h3>
            {genre && <p>Genre: {genre}</p>}
            {age !== undefined && <p>Age: {formatAge(age)}</p>}
            <p>{price}</p>
        </div>
    );
}