import { useState } from "react"; /** this is a hook thats used to manage information(or input) in react*/
import Header from "./Header.jsx";
import MovieList from "./MovieList.jsx";
import BookingForm from "./BookingForm.jsx";
import BookingDetails from "./BookingDetails.jsx";

export default function MovieBooking() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [tickets, setTickets] = useState(1);

  function selectMovie(movie) {
    setSelectedMovie(movie);
  }

  return (
    <div>
      <Header/>

      <MovieList selectMovie={selectMovie} />
      <BookingForm selectedMovie={selectedMovie} setTickets={setTickets} />
      <BookingDetails selectedMovie={selectedMovie} tickets={tickets} />
    </div>
  );
}
