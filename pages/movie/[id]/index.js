import { server } from "config";
import axios from "axios";
import Image from "next/image";
import Meta from "components/meta";

const index = ({ movie }) => {
  console.log(movie);
  return (
    <div className="container max-w-7xl mx-auto pt-6">
      <Meta title={movie.title} description={movie.overview} />
      <div className="px-3 grid gap-10 md:grid-cols-2">
        <div>
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            width={1000}
            height={600}
            layout="responsive"
            alt={movie.title}
            className="rounded-md"
          />
        </div>
        <div>
          <h1 className="font-bold text-xl my-2">{movie.title}</h1>
          <p className="text-gray-600 text-sm mt-4">{movie.overview}</p>
          <p className="mt-5 text-gray-600 text-sm">
            Genres:{" "}
            <span className="font-bold">
              {movie.genres.map((genre) => genre.name).join(", ")}
            </span>
          </p>
          <p className="text-gray-600 text-sm">
            Release Date:{" "}
            <span className="font-bold">{movie.release_date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;

export async function getStaticProps(context) {
  const { id } = context.params;
  const response = await axios(
    `${server}/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movie = response.data;
  return {
    props: {
      movie,
    },
  };
}

export async function getStaticPaths() {
  const response = await axios(
    `${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movies = response.data.results;
  const ids = movies.map((movie) => movie.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  //   const paths = [
  //     { params: { id: "123" } },
  //     { params: { id: "456" } },
  //     { params: { id: "678" } },
  //   ];

  return {
    paths,
    fallback: false,
  };
}
