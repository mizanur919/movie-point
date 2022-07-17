import MovieCard from "./MovieCard";

const PopularMovies = ({ movies }) => {
  return (
    <div className="bg-gray-700 ">
      <div className="container max-w-7xl mx-auto pb-10 px-4">
        <h1 className="text-white text-2xl mt-8 mb-5">Popular Movies</h1>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
