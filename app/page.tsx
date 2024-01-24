import Hero from "@/components/Hero";
import InfiniteMovieList from "@/components/InfiniteMovieList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-10 bg-gray-9">
      <Hero />
      <InfiniteMovieList />
    </main>
  );
}
