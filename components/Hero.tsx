import MovieSearch from "./MovieSearch";

const Hero = () => {
  return (
    <>
      <div className="hero-h absolute z-0 w-full bg-hero bg-cover bg-center bg-no-repeat opacity-30" />
      <div className="hero-h z-20 flex w-full items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-y-6 px-80">
          <h3 className="text-5xl font-semibold text-gray-1">
            {" "}
            Browse Movies, Tv Shows and More
          </h3>
          <MovieSearch />
          <p className="text-center text-base tracking-wider text-gray-2">
            Here you will find Netflix&apos;s HBO&apos;s, Prime Video&apos;s
            complete libraries of movies and TV Shows. Click search to browse
            for any movie or tv show and find out everything you need to know
            about it.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
