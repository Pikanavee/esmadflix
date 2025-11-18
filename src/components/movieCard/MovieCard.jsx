import React, { useState } from "react";
import styles from "./MovieCard.module.css";

const MovieCard = ({ title, description, image }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.1) 100%), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p
          className={expanded ? styles.expanded : styles.truncated}
          onClick={() => setExpanded((v) => !v)}
          title={expanded ? "Clique para recolher" : "Clique para expandir"}
          style={{ cursor: "pointer" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
