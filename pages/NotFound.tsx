import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Ghost, ArrowLeft } from "lucide-react";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className={styles.iconBox}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Ghost className={styles.icon} />
        </motion.div>

        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.subtitle}>
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link to="/" className={styles.homeButton}>
          <ArrowLeft className={styles.backIcon} />
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
