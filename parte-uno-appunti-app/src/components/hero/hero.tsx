import Image, { StaticImageData } from "next/image";
import styles from "./hero.module.scss";

interface HeroProps {
    imgData: StaticImageData;
    title: string;
    description: string;
}

const Hero = ({imgData ,title, description }: HeroProps) => {
    return (
        <div className={styles.hero}>
            <Image src={imgData.src}
                alt="anche qui puoi mettere un alt dinamico" 
                className={styles.imageContainer}
                style={{ objectFit: 'cover' }}
                fill 
                // con la prop fill non serve il width e height
                // altrimenti è un errore
                />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default Hero;

