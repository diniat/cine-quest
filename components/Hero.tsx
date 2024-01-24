import MovieSearch from "./MovieSearch";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 h-[100dvh] w-full bg-hero bg-cover bg-center bg-no-repeat opacity-30" />
      <div className="hero-h z-10  flex w-full items-center justify-center bg-transparent">
        <div className="flex w-full flex-col items-center justify-center gap-y-6 px-6 md:px-40 xl:px-80">
          <h3 className="text-center text-3xl font-semibold text-gray-1 md:text-5xl">
            Browse Movies, Tv Shows and More
          </h3>
          <MovieSearch />
          <p className="text-center text-sm tracking-wider text-gray-2 md:text-base">
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
