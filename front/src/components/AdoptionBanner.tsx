interface AdoptionBannerProps {
    id: string;
    title: string;
    titleIcon?: string;
    subtitle: string;
    description: string;
    primaryButtonText: string;
    primaryButtonIcon?: string;
    secondaryButtonText: string;
    secondaryButtonIcon?: string;
    backgroundImage: string;
    contentAlignment: 'left' | 'right';
}

export default function AdoptionBanner({
    id,
    title,
    titleIcon,
    subtitle,
    description,
    primaryButtonText,
    primaryButtonIcon,
    secondaryButtonText,
    secondaryButtonIcon,
    backgroundImage,
    contentAlignment
}: AdoptionBannerProps) {
    return (
        <section
            id={id}
            className={`container banner ${contentAlignment}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="content">
                <h2>
                    {title}{titleIcon && <img src={titleIcon} alt="Title Icon" className="title-icon" />}
                </h2>
                <h3>{subtitle}</h3>
                <p>{description}</p>
                <button className="primary-btn">
                    {primaryButtonText} {primaryButtonIcon && <img src={primaryButtonIcon} alt="Primary Button Icon" />}
                </button>
                <button className="primary-btn">
                    {secondaryButtonText} {secondaryButtonIcon && <img src={secondaryButtonIcon} alt="Primary Button Icon" />}
                </button>
            </div>
        </section>
    );
}