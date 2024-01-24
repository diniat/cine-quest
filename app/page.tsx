import Hero from "@/components/Hero";
import InfiniteMovieList from "@/components/InfiniteMovieList";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-10 overflow-x-hidden bg-gray-9">
      <Hero />
      <InfiniteMovieList />
    </main>
  );
}
