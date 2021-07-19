import { Route } from "react-router-dom";

// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

// Pages
import HomePage from "./Pages/Home.page";
import MoviePage from "./Pages/Movie.page";
import Plays from "./Pages/Plays.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
        <DefaultHOC path="/" exact component={HomePage} />
        <MovieHOC path="/movie/:id" exact component={MoviePage}/>
        <DefaultHOC path="/plays" exact component={Plays} />
      </>
    );
  }

export default App;
