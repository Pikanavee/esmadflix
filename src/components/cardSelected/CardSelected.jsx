import React from "react";
import styles from "./CardSelected.module.css";

const CardSelected = ({ movie, onClose }) => {
  if (!movie) return null;
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <img src={movie.image} alt={movie.title} className={styles.image} />
        <div className={styles.content}>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardSelected;
