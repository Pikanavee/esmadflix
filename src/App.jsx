import React, { useState } from "react";
import CardSelected from "./components/cardSelected/CardSelected";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import Header from "./components/header/Header";
import MovieCard from "./components/movieCard/MovieCard";
import Footer from "./components/footer/Footer";
import "./scss/styles.scss";
import styles from "./components/movieCard/MovieCard.module.css";

// Importe as imagens locais
import Card1 from "./components/movieCard/Card1.jpg";
import Card2 from "./components/movieCard/Card2.jpg";
import Card3 from "./components/movieCard/Card3.jpg";
import Card4 from "./components/movieCard/Card4.jpg";

const movies = [
  {
    title: "A journey of destiny",
    description:
      "Dois cookies bem familiarizados um com outro, se encontram em um grande problema no reino, e agora ambos terão que trabalhar juntos para consertar o que começaram. De alguma forma.",
    image: Card1,
  },
  {
    title: "A cup of coffee",
    description:
      "Num mundo onde os sabores se encontram, Espresso Cookie e Madeleine Cookie se veem lado a lado num café pitoresco, e suas personalidades contrastantes despertam um laço inesperado. Enquanto lidam com as complexidades de suas vidas — uma ousada e intensa, a outra meiga e doce —, elas aprendem a apreciar suas diferenças e a abraçar a beleza da colaboração.",
    image: Card2,
  },
  {
    title: "Bittersweet Reality",
    description:
      "Dois amigos de longa data navegam por suas complexas emoções, Espresso Cookie luta contra as pressões de um futuro incerto e seu perfeccionismo, já Madeleine Cookie se vê preso entre seus sonhos e a dura realidade da vida cotidiana.",
    image: Card3,
  },
  {
    title: "An unexpected guest",
    description:
      "Quando Espresso Cookie decide fazer uma visita inesperada a Madeleine Cookie, a atmosfera doce se transforma em um emocionante jogo de descobertas e reviravoltas. Enquanto os dois personagens exploram suas diferenças e semelhanças, eles se deparam com segredos que podem mudar suas vidas para sempre.",
    image: Card4,
  },
];

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div>
      <Header />
      <div className={styles.cardsContainer}>
        {movies.map((movie, idx) => (
          <MovieCard
            key={idx}
            title={movie.title}
            description={movie.description}
            image={movie.image}
            onSelect={() => setSelectedMovie(movie)}
          />
        ))}
      </div>
      {selectedMovie && (
        <CardSelected
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
