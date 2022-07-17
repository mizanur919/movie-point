import Head from "next/head";

const Meta = ({ keywords, description, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width-device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "Movie Point",
  keywords: "Movie, TV Series, Trending Movies",
  description: "Watch movie for free for limited time",
};

export default Meta;
