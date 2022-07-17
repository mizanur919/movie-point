import axios from "axios";
import PopularMovies from "components/PopularMovies";
import { server } from "config";
import Hero from "components/Hero";

export default function Home({ movies }) {
  console.log(movies);
  return (
    <div>
      <Hero />
      <PopularMovies movies={movies.results} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios(
    `${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  console.log(response);
  const movies = response.data;
  return {
    props: {
      movies,
    },
  };
}
