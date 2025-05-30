import styles from './card.module.css';
import Image from 'next/image';

export default function ReportCard({ title, subtitle, imageUrl, status, date }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.statusContainer}>
          <span className={styles.status}>{status}</span>
          <span className={styles.date}>{date}</span>
        </div>
      </div>
    </div>
  );
}
