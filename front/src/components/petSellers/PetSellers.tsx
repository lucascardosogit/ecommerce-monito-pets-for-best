import './PetSellers.css';
import '../../App.css';

export default function PetSellers() {
    return (
        <section id="pet-sellers" className='container'>
            <div className='sellers-header'>
                <div className='header-text'>
                    <p>Proud to be part of <span className="emphasis">Pet Sellers</span></p>
                </div>
                <div className='header-btn'>
                    <button className="secondary-btn">View all our sellers <img src="/images/resources/right-arrow.svg" alt="Right-arrow" /></button>
                </div>
            </div>
            <div className='sellers-images-container'>
                <img src="/images/brands/sheba.png" alt="sheba's brand" />
                <img src="/images/brands/whiskas.png" alt="whiskas's brand" />
                <img src="/images/brands/bakers.png" alt="bakers's brand" />
                <img src="/images/brands/felix.png" alt="felix's brand" />
                <img src="/images/brands/goodboy.png" alt="goodboy's brand" />
                <img src="/images/brands/butchers.png" alt="butchers's brand" />
                <img src="/images/brands/pedigree.png" alt="pedigree's brand" />
            </div>
        </section>
    )
}