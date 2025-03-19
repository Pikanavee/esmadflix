import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import Header from "./components/header/Header";
import MovieCard from "./components/movieCard/MovieCard";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <MovieCard />
      <Footer />
    </div>
  );
};

export default App;
