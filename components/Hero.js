import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto">
        <Image
          src="/movie-home.png"
          width={400}
          height={200}
          alt="Movie Point"
          layout="responsive"
        />
      </div>
      <h1 className="text-2xl text-gray-700 uppercase font-bold">
        Welcome To Movie Point
      </h1>
      <p className="text-gray-700">
        Watch The Most Popular TV Series, Movie And More
      </p>
      <Link href="/contact">
        <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4">
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default Hero;
