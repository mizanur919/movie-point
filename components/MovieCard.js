import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="bg-white shadow-sm rounded-sm cursor-pointer mb-4">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={700}
          height={800}
          layout="responsive"
          alt={movie.title}
          className="rounded-t-sm"
        />
        <div className="px-6 py-2">
          <h2 className="font-bold text-xl mb-1">{movie.title}</h2>
          <p className="text-gray-700 text-base mb-1">{movie.release_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
