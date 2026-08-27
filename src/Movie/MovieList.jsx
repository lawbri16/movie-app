export default function MovieList({ selectMovie }) {
  const movies = [
    {
      id: 1,
      title: "Avengers",
      genre: "Action",
      price: 5000,
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
    },

    {
      id: 2,
      title: "Inception",
      genre: "Science Fiction",
      price: 4500,
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    },

    {
      id: 3,
      title: "The Batman",
      genre: "Action",
      price: 4000,
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
    },
  ];

  return (
    <section id="movies" className="movies">
      <h2>🎬 Available Movies</h2>

      <div className="movie-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.image} alt={movie.title} />

            <h3>{movie.title}</h3>

            <p>Genre: {movie.genre}</p>

            <p>Price: ₦{movie.price}</p>

            <button onClick={() => selectMovie(movie)}>Book Ticket</button>
          </div>
        ))}
      </div>
    </section>
  );
}
