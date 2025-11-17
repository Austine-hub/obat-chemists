import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

import pic1 from '../../assets/consultation.png';

const Hero = () => {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${pic1})` }}>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>Health Essentials</span>
          <h1 className={styles.title}>
            Your Trusted Pharmacy for Wellness
          </h1>
          <p className={styles.subtitle}>
            Discover a wide range of prescription medications, vitamins, and healthcare products delivered safely to your door.
          </p>
          <Link to="/products/prescription" className={styles.cta}>
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
