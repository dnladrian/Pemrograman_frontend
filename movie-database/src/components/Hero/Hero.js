import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

function Hero() {
    const [movie, setMovie] = useState("");

    useEffect(async function () {
        // lakukan fetch disini
        async function fetchMovie () {
        const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
        const response = await fetch(url);
        const data = await response.json();
        setMovie(data);
        }
    
    
    fetchMovie();
}, []);
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Spiderman</h2>
                    <h3 className={styles.hero__genre}>
                        Genre : Thriller, Drama, Romance
                    </h3>
                    <p className={styles.hero__description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas similique distinctio obcaecati a, aperiam accusantium voluptatum
                         earum dignissimos harum nemo nihil animi dolorem autem, ducimus unde iusto quibusdam id odio.
                    </p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={"hero__right"}>
                    <img className={styles.hero__image}
                    src="https://picsum.photos/536/354" 
                    alt="placeholder" 
                    />
                </div>
            </section>
        </div>
    );
}

export default Hero;