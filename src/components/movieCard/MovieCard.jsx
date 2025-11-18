import React, { useState } from "react";
import styles from "./MovieCard.module.css";

const MovieCard = ({ title, description, image, onSelect }) => {
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
        <h3 onClick={onSelect} style={{ cursor: "pointer" }}>
          {title}
        </h3>
        <img
          src={image}
          alt={title}
          style={{ display: "none" }}
          onClick={onSelect}
        />
        <p
          className={expanded ? styles.expanded : styles.truncated}
          onClick={() => setExpanded((v) => !v)}
          title={expanded ? "Clique para recolher" : "Clique para expandir"}
          style={{ cursor: "pointer" }}
        >
          {description}
        </p>
      </div>
      {/* Adicione um overlay invisível para capturar clique na imagem */}
      <div
        onClick={onSelect}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "70%",
          cursor: "pointer",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default MovieCard;
