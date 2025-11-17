import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DiscountCard.module.css';

// Import images - replace with your actual image paths
import supplementsImage from '../assets/vitamin.png';
import medicineImage from '../assets/omega.png';
import oralCareImage from '../assets/oralcare.png';
import consultationImage from '../assets/consultation.png';
import skincareImage from '../assets/skincare.png';

const DiscountCards: React.FC = () => {
const cards = [
  {
    id: 1,
    badge: 'Special Offer',
    title: 'Daily Health Essentials',
    description: 'Get all your everyday medicines, supplements, and health essentials delivered safely.',
    image: medicineImage,  // Replace with your medicine image
    bgColor: '#B8DFE6',
    link: '/daily-health-essentials'
  },
  {
    id: 2,
    badge: 'Wellness Deals',
    title: 'Oral Care & Dental Health',
    description: 'Explore top-quality toothpaste, toothbrushes, and dental care products for the whole family.',
    image: oralCareImage,  // Replace with a dental/oral care image
    bgColor: '#D5D5D5',
    link: '/system/oral-hygiene'
  },
  {
    id: 3,
    badge: 'Exclusive Offer',
    title: 'Vitamins & Supplements',
    description: 'Boost immunity and wellness with our curated range of vitamins and dietary supplements.',
    image: supplementsImage,  // Replace with a supplements image
    bgColor: '#C8D9E4',
    link: '/vitamins-supplements'
  },
  {
    id: 4,
    badge: 'Healthcare Services',
    title: 'Professional Health Consultations',
    description: 'Book online consultations with certified pharmacists and healthcare professionals.',
    image: consultationImage,  // Replace with consultation/doctor image
    bgColor: '#E4C8D9',
    link: '/contact-us'
  },
  {
    id: 5,
    badge: 'Wellness & Care',
    title: 'Skincare & Personal Care',
    description: 'Discover gentle and effective personal care and wellness products for everyday use.',
    image: skincareImage,  // Replace with skincare/wellness image
    bgColor: '#D9E4C8',
    link: '/categories/skin-care'
  }
];


  return (
    <section className={styles.discountSection}>
      <div className={styles.cardsContainer}>
        {cards.map((card) => (
          <article 
            key={card.id} 
            className={styles.card}
            style={{ backgroundColor: card.bgColor }}
          >
            <div className={styles.cardContent}>
              <span className={styles.badge}>{card.badge}</span>
              <h2 className={styles.cardTitle}>{card.title}</h2>
              <p className={styles.cardDescription}>{card.description}</p>
              <Link to={card.link} className={styles.viewMoreLink}>
                View More
                <svg 
                  className={styles.arrow} 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none"
                  aria-hidden="true"
                >
                  <path 
                    d="M6 3L11 8L6 13" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className={styles.cardImageWrapper}>
              <img 
                src={card.image} 
                alt="" 
                className={styles.cardImage}
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>

      <div className={styles.cashbackBanner}>
        <div className={styles.cashbackContent}>
          <div className={styles.cashbackText}>
            <span className={styles.cashbackTitle}>RETURN CASH BACK</span>
            <span className={styles.cashbackDescription}>
              Earn 5% cash back on Bumedi.com{' '}
              <span className={styles.cashbackSubtext}>
                See if you're pre-approved with no credit risk
              </span>
            </span>
          </div>
          <Link to="/cashback" className={styles.discoverButton}>
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscountCards;