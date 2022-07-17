import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="container max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center h-96">
        <h1 className="text-9xl font-bold text-gray-600">404</h1>
        <h6 className="my-7 text-4xl">
          Oops! <span>Page Not Found</span>
        </h6>
        <Link href="/">
          <a className="bg-gray-600 py-2 px-3 rounded-md text-white">
            Back To Home
          </a>
        </Link>
      </div>
    </div>
  );
};
export default PageNotFound;
