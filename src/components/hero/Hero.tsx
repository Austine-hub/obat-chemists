import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>Exclusive Discounts</span>
          <h1 className={styles.title}>
            Magical Toys for Bright Futures
          </h1>
          <p className={styles.subtitle}>
            Create Magical Moments with Our Wide Range of Engaging Toys and Adorable Clothing for Little Ones
          </p>
          <Link to="/products/prescription" className={styles.cta}>
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;